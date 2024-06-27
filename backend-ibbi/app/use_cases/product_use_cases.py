from fastapi import status
from fastapi.exceptions import HTTPException
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session
from app.schemas.product import ProductRequest
from app.models.product import ProductModel



class ProductUseCases:
    def __init__(self, db: Session):
        self.db = db

    def product_create(self, product: ProductRequest):
        product_model = ProductModel(
            description=product.description,
            price=product.price,
            amount=product.amount,
            category_id=product.category_id,
            image=product.image)
        try:
            self.db.add(product_model)
            self.db.commit()
        except IntegrityError:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Produto já existe')
        
    def get_product(self, product_id: int):
        product_on_db = self.db.query(ProductModel).filter(ProductModel.id == product_id).first()
        if product_on_db is None:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Produto não encontrado') 
        return product_on_db    
    
    def get_products(self, skip: int = 0, limit: int = 10):
        return self.db.query(ProductModel).offset(skip).limit(limit).all()
