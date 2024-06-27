from fastapi import APIRouter, Depends
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from app.schemas.purchase import PurchaseRequest, PurchaseResponse
from app.shared.dependencies import get_db, token_verifier
from sqlalchemy.orm import Session
from app.use_cases.purchase_use_cases import PurchaseUseCases

router = APIRouter(prefix='/purchase')

@router.post('/make', response_model=PurchaseRequest, status_code=201)
async def make_purchase(purchase: PurchaseRequest, db: Session=Depends(get_db)):
    pc = PurchaseUseCases(db=db)
    pc.make_purchase(purchase=purchase)
    return JSONResponse(content={'msg': 'Compra realizada'})

@router.get('/purchases', response_model=list[PurchaseResponse], status_code=200)
async def get_purchases(skip: int = 0, limit: int = 10, db: Session=Depends(get_db)):
    pc = PurchaseUseCases(db=db)
    purchases = jsonable_encoder(pc.get_purchases(skip=skip, limit=limit))
    return JSONResponse(content=purchases)