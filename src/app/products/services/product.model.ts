export class Product {
    id?: number;
    title?: string;
    type?: string;
    description?: string;
    availibility:boolean;
    safeFor:number;
    qualityScore:number;
    tags:string[];
    seller?:SellerAddress;
    price?: number;
    rating?: number;
    imageurl?: string;
    imageurls?: string;
    currencycode?:string
}

export class SellerAddress{
    AddLine1:string;
    AddLine2:string;
    AddLine3:string;
    City:string;
    State:string;
}

// "id":1,
// "title": "Brown eggs",
// "type": "dairy",
// "description": "Raw organic brown eggs in a basket",
// "filename": "0.jpg",
// "height": 600,
// "width": 400,
// "price": 28.1,
// "rating": 4,
// "imageurl"