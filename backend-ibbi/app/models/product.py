from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship
from app.shared.database import Base

class ProductModel(Base):
    __tablename__ = "products"
    id = Column('id', Integer, primary_key=True, nullable=False, autoincrement=True)
    description = Column('description', String, nullable=False)
    price = Column('price', Float, nullable=False)
    amount = Column('amount', Integer, nullable=False)
    image = Column('image', String, nullable=False)
    category_id = Column('category', Integer, ForeignKey('categories.id'))
    category = relationship('CategoryModel')
    sales = relationship('SaleModel')