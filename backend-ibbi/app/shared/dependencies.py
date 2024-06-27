from app.shared.database import SessionLocal
from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from app.use_cases.user_use_cases import UserUseCases

oauth_scheme = OAuth2PasswordBearer(tokenUrl='/user/login')

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def token_verifier(
        db: SessionLocal=Depends(get_db),
        token=Depends(oauth_scheme)
    ):
        uc = UserUseCases(db=db)
        uc.user_verify_token(access_token=token)
    