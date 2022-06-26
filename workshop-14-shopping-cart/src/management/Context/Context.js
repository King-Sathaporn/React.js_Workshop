// create context api for share data between components
import { createContext, useReducer, useContext, useEffect} from "react";
import reducer from "../reducer/reducer"
import CartData from "../../assets/data/CartData";

const initState = {
    cart: CartData,
    quantity: 0,
    total: 0
}

const CartContext = createContext()

export const MyCartContext = () => {
    return useContext(CartContext)
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        dispatch({type: "CALCULATE_TOTAL"})
    },[state.cart])

    const removeItem = (id) => {
        console.log(id)
        dispatch({type:"REMOVE_ITEM", payload: id})
    }

    const toggleQuantity = (id, type) => {
        dispatch({type:"TOGGLE_QUANTITY", payload: {id, type}})
    }

    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return(
        <CartContext.Provider value={{...state, removeItem, toggleQuantity, formatNumber}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}