from sqlalchemy import Column, Integer, Date, Time, String, ForeignKey
from app.shared.database import Base


class SaleModel(Base):
    __tablename__ = "sales"
    id = Column('id', Integer, primary_key=True, nullable=False, autoincrement=True)
    datetime = Column('datetime', Date)
    hour = Column('hour', Time)
    client = Column('client', String, nullable=False)
    seller = Column('seller', String, nullable=False)
    sale_desc = Column('sale_desc', String, nullable=False)
    product_id = Column('product', Integer, ForeignKey('products.id'))
    amount = Column('amount', Integer, nullable=False)