import { MyCartContext } from "../../management/Context/Context"
import plusIcon from "../../assets/images/plus-icon.svg"
import minusIcon from "../../assets/images/minus-icon.svg"
import deleteIcon from "../../assets/images/delete-icon.svg"

const CartItem = ({id, name, image_url, price, quantity}) => {

    const { removeItem, toggleQuantity, formatNumber } = MyCartContext()

    return(
        <div className="item">
            <div className="product-image">
                <img src={image_url} alt={name}/>
            </div>
            <div className="product-info">
                <span>{name}</span>
                <span> {formatNumber(price)} THB</span>
            </div>
            <div className="product-quantity">
                <button className="minus-btn" onClick={()=>toggleQuantity(id,"decrement")}>
                    <img src={minusIcon} alt="minus"/>
                </button>
                <input type="text" value={quantity} disabled/>
                <button className="plus-btn" onClick={()=>toggleQuantity(id,"increment")}>
                    <img src={plusIcon} alt="plus"/>
                </button>
            </div>
            <div className="total-price">
                {formatNumber(price * quantity)}
            </div>
            <div className="delete-btn" onClick={()=>removeItem(id)}>
                    <img src={deleteIcon} alt="delete"/>
            </div>
        </div>
    )

}

export default CartItem;