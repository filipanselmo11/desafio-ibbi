from fastapi import status
from fastapi.exceptions import HTTPException
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session
from sqlalchemy.sql import func
from app.schemas.sale import SaleRequest
from app.models.product import ProductModel
from app.models.sale import SaleModel

class SaleUseCases:
    def __init__(self, db: Session):
        self.db = db
    
    def make_sell(self, sale: SaleRequest):
        product = self.db.query(ProductModel).filter(ProductModel.id == sale.product_id).first()

        if product is None:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Produto não encontrado')
        
        sale_model = SaleModel(
            datetime=sale.datetime,
            hour=sale.hour,
            client=sale.client,
            seller=sale.seller,
            sale_desc=sale.sale_desc,
            product_id=sale.product_id,
            amount=sale.amount
        )

        try:
            self.db.add(sale_model)
            self.db.commit()
        except IntegrityError:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Erro ao realizar a venda')
        
    def get_top_products(self, skip: int= 0, limit: int = 10):
        top_products = self.db.query(
            ProductModel.id,
            ProductModel.description,
            func.sum(SaleModel.amount).label("total_sold")
        ).join(SaleModel).group_by(ProductModel.id).order_by(func.sum(SaleModel.amount).desc()).offset(skip).limit(limit).all()

        return top_products
    
    def get_sales(self, skip: int = 0, limit: int = 10):
        return self.db.query(SaleModel).offset(skip).limit(limit).all()

    def get_sales_by_category(self, category_id: int):
        return self.db.query(SaleModel).join(ProductModel).filter(ProductModel.category_id == category_id).all() 