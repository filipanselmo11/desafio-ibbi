from pydantic import BaseModel
from app.schemas.category import CategoryResponse

class ProductResponse(BaseModel):
    id: int
    description: str
    price: float
    amount: int
    category: CategoryResponse | None = None
    image: str
    class Config:
        from_attributes = True


class ProductRequest(BaseModel):
    description: str
    price: float
    amount: int
    category_id: int | None = None
    image: str