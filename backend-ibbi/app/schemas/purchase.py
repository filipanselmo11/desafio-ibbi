from pydantic import BaseModel

class PurchaseResponse(BaseModel):
    id: int
    user_id: str
    product_id: str
    class Config:
        from_attributes = True


class PurchaseRequest(BaseModel):
    user_id: int
    product_id: int