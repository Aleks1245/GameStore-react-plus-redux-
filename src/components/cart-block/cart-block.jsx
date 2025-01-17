import './cart-block.css';
import React , {useCallback, useState} from 'react';
import { useSelector } from 'react-redux';
import { BiCartAlt } from "react-icons/bi";
import CartMenu from '../cart-menu/cart-menu';
import ItemsInCart from '../items-in-cart/items-in-cart';
import { calcTotalPrice } from '../utils';
import { useNavigate } from 'react-router-dom';

const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector(state =>state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const navigate = useNavigate();

    const handleClick = useCallback(() =>{
        setIsCartMenuVisible(false);
        navigate('/order');
    },[navigate]);
    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt size={25} className="cart-block__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice} UAH.</span> : null}
            { isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}  
        </div>
    );
}
 
export default CartBlock;