from pydantic import BaseModel
from datetime import datetime, time

class SaleResponse(BaseModel):
    id: int
    datetime: datetime
    hour: time
    client: str
    seller: str
    sale_desc: str
    product_id: int
    amount: int
    class Config:
        from_attributes = True


class SaleRequest(BaseModel):
    datetime: datetime
    hour: time
    client: str
    seller: str
    sale_desc: str
    product_id: int
    amount: int