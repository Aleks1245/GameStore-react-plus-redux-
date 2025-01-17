import { useSelector } from 'react-redux';
import OrderItem from '../../components/order-item/order-item';
import { calcTotalPrice } from '../../components/utils';
import './order-page.css';

const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart);

    if(items.length < 1){
        return <h1>Ваша корзина пуста</h1>
    }

    return (
        <div className='order-page'>
            <div className="order-page__left">
                {items.map(game => <OrderItem game={game}/>)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-rice">
                    <span >{items.length} товаров на суму <span className='price_span'>{calcTotalPrice(items)}UAH.</span> </span>
                </div>
            </div>
        </div>
    );
}
 
export default OrderPage;