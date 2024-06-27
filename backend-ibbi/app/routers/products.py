from fastapi import APIRouter, Depends
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from app.schemas.product import ProductRequest, ProductResponse
from app.shared.dependencies import get_db, token_verifier
from sqlalchemy.orm import Session
from app.use_cases.product_use_cases import ProductUseCases

router = APIRouter(prefix='/product')

@router.post('/create', response_model=ProductRequest, status_code=201)
async def product_create(product: ProductRequest, db: Session=Depends(get_db)):
    pc = ProductUseCases(db=db)
    pc.product_create(product=product)
    return JSONResponse(content={'msg': 'Produto Criado'})

@router.get('/products', response_model=list[ProductResponse], status_code=200)
async def get_products(skip: int = 0, limit: int = 10, db: Session=Depends(get_db)):
    pc = ProductUseCases(db=db)
    products = jsonable_encoder(pc.get_products(skip=skip, limit=limit))
    return JSONResponse(content=products)

@router.get('/products/{product_id}', response_model=ProductResponse, status_code=200)
async def get_product(product_id: int, db: Session=Depends(get_db)):
    pc = ProductUseCases(db=db)
    product = jsonable_encoder(pc.get_product(product_id=product_id))
    return JSONResponse(content=product)
