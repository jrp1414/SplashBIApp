import { Injectable } from "@angular/core";
import { Action, NgxsOnInit, State, StateContext } from "@ngxs/store";
import { AddToCart, DeleteFromCart, GetCartList } from "./cart.action";

export interface CartModel {
    cart: string[];
}

@State<CartModel>({
    name: "cartList",
    defaults: {
        cart: []
    }
})
@Injectable()
export class CartState implements NgxsOnInit {
    ngxsOnInit(ctx?: StateContext<any>) {
        ctx.dispatch(new GetCartList())
    }

    @Action(GetCartList)
    getCartList(state: CartModel) {
        return state.cart;
    }

    @Action(AddToCart)
    addToCart({ getState, patchState }: StateContext<CartModel>, { payload }: AddToCart) {
        const state = getState();
        patchState({

            cart: [...state.cart, payload]
        })
    }

    @Action(DeleteFromCart)
    deleteFromCart({ getState, setState }: StateContext<CartModel>, { payload }: DeleteFromCart) {
        const state = getState();
        const filteredArray = state.cart.filter(item => item !== payload);
        setState({
            ...state,
            cart:filteredArray
        });
    }


}