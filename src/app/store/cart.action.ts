import { createAction, props } from "@ngrx/store";


export interface CartInfo {
    titles?:string[];
}

export const cartAction = createAction("Cart Titles",props<{cart:CartInfo}>());