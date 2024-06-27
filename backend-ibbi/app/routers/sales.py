from fastapi import APIRouter, Depends
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from app.schemas.sale import SaleRequest, SaleResponse
from app.shared.dependencies import get_db, token_verifier
from sqlalchemy.orm import Session
from app.use_cases.sale_use_cases import SaleUseCases
from app.schemas.product import ProductResponse

router = APIRouter(prefix='/sale')

@router.post('/make', response_model=SaleRequest, status_code=201)
async def make_sell(sale: SaleRequest, db: Session=Depends(get_db)):
    sc = SaleUseCases(db=db)
    sc.make_sell(sale=sale)
    return JSONResponse(content={'msg': 'Venda realizada'})

@router.get('/top-products', response_model=list[ProductResponse], status_code=200)
async def get_top_products(skip:int = 0, limit: int = 10, db: Session=Depends(get_db)):
    sc = SaleUseCases(db=db)
    top_products = jsonable_encoder(sc.get_top_products(skip=skip, limit=limit))
    return JSONResponse(content=top_products)

@router.get('/sales', response_model=list[SaleResponse], status_code=200)
async def get_sales(skip: int = 0, limit: int = 10, db: Session=Depends(get_db)):
    sc = SaleUseCases(db=db)
    sales = jsonable_encoder(sc.get_sales(skip=skip, limit=limit))
    return JSONResponse(content=sales)

@router.get('/sales-by-category', response_model=list[SaleResponse], status_code=200)
async def get_sales_by_id(category_id: int, db: Session=Depends(get_db)):
    sc = SaleUseCases(db=db)
    sales_category = jsonable_encoder(sc.get_sales_by_category(category_id=category_id))
    return JSONResponse(content=sales_category)
