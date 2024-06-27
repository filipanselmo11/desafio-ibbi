from pydantic import BaseModel
# import re

class UserResponse(BaseModel):
    id: int
    name: str
    username: str
    password: str
    class Config:
        from_attributes = True


class UserCreateRequest(BaseModel):
    name: str
    username: str
    password: str
    # @field_validator('username')
    # def validate_username(cls, value):
    #     if not re.match('^([a-z]|[0-9]|@)+$', value):
    #         raise ValueError('Formato de username inválido')
    #     return value
    

class UserLoginRequest(BaseModel):
    username: str
    password: str
    # @field_validator('username')
    # def validate_username(cls, value):
    #     if not re.match('^([a-z]|[0-9]|@)+$', value):
    #         raise ValueError('Formato de username inválido')
    #     return value