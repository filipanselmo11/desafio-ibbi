from sqlalchemy import Column, Integer, String
from app.shared.database import Base
from sqlalchemy.orm import relationship

class CategoryModel(Base):
    __tablename__ = "categories"
    id = Column('id', Integer, primary_key=True, nullable=False, autoincrement=True)
    description = Column('descricao', String, nullable=False, unique=True)
    products = relationship('ProductModel')
    