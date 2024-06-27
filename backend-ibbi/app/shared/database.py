from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

SQLALCHEMY_DATA_BASE_URL = "postgresql+psycopg2://admin:senha123@localhost/ibbi_db"
engine = create_engine(SQLALCHEMY_DATA_BASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False,bind=engine)
Base = declarative_base()