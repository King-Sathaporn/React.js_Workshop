const reducer =(state, action) =>{
    if(action.type === "REMOVE_ITEM"){
        const newCart = state.cart.filter((item) => item.id !== action.payload)
        return {
            ...state,
            cart: newCart
        }
    }
    if(action.type === "TOGGLE_QUANTITY"){

        const newCart = state.cart.map((item) => {
            if(item.id === action.payload.id){
                if(action.payload.type === "increment"){
                    return{
                        ...item,
                        quantity: item.quantity<10? item.quantity+1: item.quantity
                    }
                }
                if(action.payload.type === "decrement"){
                    return{
                        ...item,
                        quantity: item.quantity-1
                    }
                }
            }
            return item
        }).filter((item) => item.quantity !== 0)

        return{
            ...state,
            cart: newCart
        }
    }
    if(action.type === "CALCULATE_TOTAL"){

        const {total, quantity} = state.cart.reduce((cartTotal, item) => {
            const {price, quantity} = item
            const itemTotal = price * quantity
            cartTotal.total += itemTotal
            cartTotal.quantity += quantity
            return cartTotal
        },{
            // initail value
            total: 0,
            quantity: 0
        })

        return{
            ...state,
            total: total,
            quantity: quantity
        }
    }
}

export default reducer;