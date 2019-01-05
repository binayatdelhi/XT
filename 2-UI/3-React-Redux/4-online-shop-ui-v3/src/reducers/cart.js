


import { BUY } from '../constants'

/*

{
    111:{item,qty}
}

*/

export function cartReducer(state = {}, action) {
    // console.log("-cart-reducer-");
    switch (action.type) {
        case BUY: {
            let { item, qty } = action;
            let { id } = item;
            if (state[id]) {
                let itemLine = state[id];
                return Object.assign({}, state, { [id]: { item, qty: itemLine.qty + 1 } })
            } else {
                qty = Number.parseInt(qty, 10) || 1;
                return Object.assign({}, state, { [id]: { item, qty } })
            }
        }
        default:
            return state;
    }
}