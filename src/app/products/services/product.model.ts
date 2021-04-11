export class Product {
    id?: number;
    title?: string;
    type?: string;
    description?: string;
    availibility:boolean;
    safeFor:number;
    qualityScore:number;
    tags?:string[];
    Tags?:Tag[];
    seller?:SellerAddress;
    Addresses?:SellerAddress[];
    price?: number;
    rating?: number;
    releaseDate?:Date;
    imageurls?: string[];
    ImageUrls?: ImageUrl[];
    currencycode?:string;
}

export class SellerAddress{
    id?:number;
    AddLine1:string;
    AddLine2:string;
    AddLine3:string;
    City:string;
    State:string;
}

export class ImageUrl{
    id?:number;
    imageUrl:string;
}

export class Tag{
    id?:number;
    tag:string;
}

export class TypeMaster{
    id?:number;
    Type:string;
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