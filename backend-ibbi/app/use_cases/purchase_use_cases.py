from fastapi import status
from fastapi.exceptions import HTTPException
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session
from app.schemas.purchase import PurchaseRequest
from app.models.purchase import PurchaseModel
from app.models.user import UserModel
from app.models.product import ProductModel


class PurchaseUseCases:
    def __init__(self, db: Session):
        self.db = db

    def make_purchase(self, purchase: PurchaseRequest):
        user = self.db.query(UserModel).filter(UserModel.id == purchase.user_id).first()
        product = self.db.query(ProductModel).filter(ProductModel.id == purchase.product_id).first()

        if user is None:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Usuário(a) não encontrado')
        
        if product is None:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Produto não encontrado')
        
        purchase_model = PurchaseModel(user_id=user.id, product_id=product.id)
        try:
            self.db.add(purchase_model)
            self.db.commit()
        except IntegrityError:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Erro ao realizar a compra')
        
    def get_purchases(self, skip: int = 0, limit: int = 10):
        return self.db.query(PurchaseModel).offset(skip).limit(limit).all()