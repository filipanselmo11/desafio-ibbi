from pydantic import BaseModel

class CategoryResponse(BaseModel):
    id: int
    description: str
    class Config:
        from_attributes = True

class CategoryRequest(BaseModel):
    description: str