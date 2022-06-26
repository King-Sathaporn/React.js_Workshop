import { MyCartContext } from '../../management/Context/Context';
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const { cart, total, formatNumber } = MyCartContext()

    if(cart.length === 0){
        return(
            <div className='shopping-cart'>
                <h1 className='empty'> There are no items in the cart.</h1>
            </div>
        )

    }else{
        return(
            <div className="shopping-cart">
                <div className="title">Items in cart</div>
                {cart.map((item, index) => {
                    return(
                        <CartItem key={index} {...item}/>
                    )
                })}
                <div className="footer">Total {formatNumber(total)} THB</div>
            </div>
        )
    }
}

export default Cart;