import Button from '../button/button';
import { useDispatch, useSelector } from 'react-redux';
import './game-buy.css';
import { setItemCart, deleteItemFromCart } from '../../redux/cart/reducer';

const GameBuy = ({game}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemsInCart = items.some(item => item.id === game.id);

    const handleClick = (e) =>{
        e.stopPropagation();
        if(isItemsInCart){
        dispatch(deleteItemFromCart(game.id));

        }else{
            dispatch(setItemCart(game));
        }
    }
    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{ game.price } UAH.</span>
            <Button 
                type={isItemsInCart ? "secondary" : "primary"}
                onClick={handleClick}
            >
                {isItemsInCart ? 'Убрать из корзины' : 'В корзину'}
            </Button>
                
        </div>
    );
}
 
export default GameBuy;