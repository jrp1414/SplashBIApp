import { createReducer, on } from "@ngrx/store";
import { cartAction, CartInfo } from "./cart.action";

export const initialState:CartInfo={};

export const cartReducer = 
    createReducer(initialState,on(cartAction,(state,{cart})=>({titles:cart.titles})));