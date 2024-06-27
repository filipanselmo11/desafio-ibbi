from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from app.shared.dependencies import get_db, token_verifier
from app.schemas.user import UserCreateRequest, UserLoginRequest, UserResponse
from app.use_cases.user_use_cases import UserUseCases


router = APIRouter(prefix='/user')
test_router = APIRouter(prefix='/test', dependencies=[Depends(token_verifier)])

@router.post('/create', status_code=201)
async def user_create(user: UserCreateRequest, db: Session=Depends(get_db)):
    uc = UserUseCases(db=db)
    uc.user_create(user=user)
    return JSONResponse(content= {'msg': 'Usuário Criado'})

@router.post('/login', status_code=200)
async def user_login(request_form_user: OAuth2PasswordRequestForm=Depends(), db: Session=Depends(get_db)):
    uc = UserUseCases(db=db)
    user = UserLoginRequest(username=request_form_user.username, password=request_form_user.password) 
    auth_data = uc.user_login(user=user)
    return JSONResponse(content=auth_data)

@router.get('/users', response_model=list[UserResponse], status_code=200)
async def get_users(skip: int = 0, limit: int = 10, db: Session=Depends(get_db)):
    uc = UserUseCases(db=db)
    users = jsonable_encoder(uc.get_users(skip=skip, limit=limit))
    return JSONResponse(content=users)

@router.get('/users/{user_id}', response_model=UserResponse, status_code=200)
async def get_user(user_id: int, db: Session=Depends(get_db)):
    uc = UserUseCases(db=db)
    user = jsonable_encoder(uc.get_user(user_id=user_id))
    return JSONResponse(content=user)

@test_router.get('/test')
async def test_user():
    return 'Funfou'