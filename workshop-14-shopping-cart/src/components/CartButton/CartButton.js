import { MyCartContext } from "../../management/Context/Context";
const CartButton = () =>{

    const {quantity} = MyCartContext()

    return(
        <button className="button">
            <span>shopping cart</span>
            <span className="cart-count">{quantity}</span>
        </button>
    )
}

export default CartButton;