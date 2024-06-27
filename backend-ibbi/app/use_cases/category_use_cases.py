from fastapi import status
from fastapi.exceptions import HTTPException
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session
from app.schemas.category import CategoryRequest
from app.models.category import CategoryModel


class CategoryUseCases:
    def __init__(self, db:Session):
        self.db = db

    def category_create(self, category: CategoryRequest):
        category_model = CategoryModel(description=category.description)
        try:
            self.db.add(category_model)
            self.db.commit()
        except IntegrityError:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Categoria já existe')
        
    def get_category(self, category_id: int):
        category_on_db = self.db.query(CategoryModel).filter(CategoryModel.id == category_id).first()
        if category_on_db is None:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Categoria não encontrada')
        return category_on_db
    
    def get_categories(self, skip: int = 0, limit: int = 10):
        return self.db.query(CategoryModel).offset(skip).limit(limit).all()