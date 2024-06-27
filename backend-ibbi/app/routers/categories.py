from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from app.shared.dependencies import get_db, token_verifier
from app.schemas.category import CategoryRequest, CategoryResponse
from sqlalchemy.orm import Session
from app.use_cases.category_use_cases import CategoryUseCases

router = APIRouter(prefix='/category')

@router.post('/create', response_model=CategoryResponse, status_code=201)
async def category_create(category: CategoryRequest, db: Session=Depends(get_db)):
    cc = CategoryUseCases(db=db)
    cc.category_create(category=category)
    return JSONResponse(content={'msg': 'Categoria Criada'})

@router.get('/categories', response_model=list[CategoryResponse], status_code=200)
async def get_categories(skip: int = 0, limit: int = 10, db: Session=Depends(get_db)):
    cc = CategoryUseCases(db=db)
    categories = jsonable_encoder(cc.get_categories(skip=skip, limit=limit))
    return JSONResponse(content=categories)

@router.get('/categories/{category_id}', response_model=CategoryResponse, status_code=200)
async def get_category(category_id: int, db: Session=Depends(get_db)):
    cc = CategoryUseCases(db=db)
    category = jsonable_encoder(cc.get_category(category_id=category_id))
    return JSONResponse(content=category)