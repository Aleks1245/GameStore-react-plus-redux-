import { useDispatch } from 'react-redux';
import GameCover from '../game-cover/game-cover';
import './order-item.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { deleteItemFromCart } from '../../redux/cart/reducer';

const OrderItem = ({game}) => {
    const dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(deleteItemFromCart(game.id));
    }
    return (
        <div className='order-item'>
            <div className="order-item__cover">
                <GameCover image={game.image} />
            </div>
            <div className="order-item__title">
                <span>{game.title}</span>
            </div>
            <div className="order-item__price">
                <span>{game.price} UAH.</span>
                <IoIosCloseCircleOutline size={25} className="cart-item__delete-icon" onClick={handleClick}/>
            </div>
        </div>
    );
}
 
export default OrderItem;