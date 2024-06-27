from sqlalchemy import Column, Integer, String
from app.shared.database import Base

class UserModel(Base):
    __tablename__ = "users"
    id = Column('id', Integer, primary_key=True, nullable=False, autoincrement=True)
    name = Column('name', String, nullable=False, unique=True)
    username = Column('username', String, nullable=False, unique=True)
    password = Column('password', String, nullable=False)