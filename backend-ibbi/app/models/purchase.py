from sqlalchemy import Column, Integer, ForeignKey
from app.shared.database import Base
from sqlalchemy.orm import relationship

class PurchaseModel(Base):
   __tablename__ = "purchases"
   id = Column('id', Integer, primary_key=True, nullable=False, autoincrement=True)
   user_id = Column('user', Integer, ForeignKey('users.id'), nullable=False)
   product_id = Column('product', Integer, ForeignKey('products.id'), nullable=False)
   user = relationship('UserModel')
   product = relationship('ProductModel')
