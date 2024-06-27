from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from fastapi.exceptions import HTTPException
from fastapi import status
from app.schemas.user import UserCreateRequest, UserLoginRequest
from app.models.user import UserModel
from passlib.context import CryptContext
from jose import jwt, JWTError
from datetime import datetime, timedelta

SECRET_KEY = "dba960e0ef2d19079a1cb67df44fa1fd8726c3ffaed6378c94954cc23aa2717e"
ALGORITHM = "HS256"
crypt_context = CryptContext(schemes=['sha256_crypt'])


class UserUseCases:
    def __init__(self, db: Session):
        self.db = db

    def user_create(self, user: UserCreateRequest):
        user_model = UserModel(name=user.name, username=user.username, password=crypt_context.hash(user.password))
        try:
            self.db.add(user_model)
            self.db.commit()
        except IntegrityError:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Usuário já existe')
        
    def user_login(self, user: UserLoginRequest, expires_in: int = 30):
        user_on_db = self.db.query(UserModel).filter_by(username=user.username).first()
        if user_on_db is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Usuário ou senha inválidos')
        if not crypt_context.verify(user.password, user_on_db.password):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Usuário ou senha iválidos')
        exp = datetime.utcnow() + timedelta(minutes=expires_in)
        payload = {
            'sub': user.username,
            'exp': exp
        }
        access_token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
        return {
            'access_token': access_token,
            'exp': exp.isoformat()
        }
    
    def user_verify_token(self, access_token):
        try:
            data = jwt.decode(access_token, SECRET_KEY, algorithms=[ALGORITHM])
        except JWTError:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail = 'Token de acesso inválido')
        user_on_db = self.db.query(UserModel).filter_by(username=data['sub']).first()
        if user_on_db is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Token de acesso inválido')
        
    def get_user(self, user_id: int):
        user_on_db = self.db.query(UserModel).filter(UserModel.id == user_id).first()
        if user_on_db is None:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Usuário não encontrado')
        return user_on_db
    
    def get_users(self, skip: int = 0, limit: int = 10):
        return self.db.query(UserModel).offset(skip).limit(limit).all()
        
        