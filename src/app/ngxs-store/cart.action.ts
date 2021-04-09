export class GetCartList{
    static readonly type="[Cart] Get";    
}
export class AddToCart{
    static readonly type="[Cart] Add";
    constructor(public payload:any) {
        
    }
}
export class DeleteFromCart{
    static readonly type="[Cart] From";
    constructor(public payload:any) {
        
    }
}