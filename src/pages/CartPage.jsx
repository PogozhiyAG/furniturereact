import React from "react";
import PageHeader from "../components/page-header";
import ProductBasketCart from "../components/product-basket-cart";


const CartPage = ({ basket }) => {
    const dummy = () => 1;

    

    return (
        <>
            <PageHeader />

            <section className="cart position__center position__gap_normal">
                <div className="cart-item-list">
                    <div className="cart-item-list__header">
                        <span>Товар</span>
                        <span>К-во</span>
                    </div>
                    
                    
                        
                    {basket.basketItems.map(entry => <ProductBasketCart key={entry.product.name} productEntry={entry} basket={basket}/>)}
                   
                    


                    <div className="cart-command-bar">
                        <button className="cart-command-bar__button ">Очистить корзину</button>
                        <button className="cart-command-bar__button ">Продолжить покупки</button>
                    </div>
                </div>

                <form className="cart-form">
                    <h3 className="cart-form__title text__size_lbb"> Оформление заказа</h3>
                    <input onChange={dummy} className="cart-form__input text-input text__size_s" type="text" name="" id="" placeholder="Имя Фамилия"></input>
                    <input onChange={dummy} className="cart-form__input text-input text__size_s" type="tel" name="" id="" placeholder="Номер телефона"></input>
                    <input onChange={dummy} className="cart-form__input text-input text__size_s" type="text" name="" id="" placeholder="Адрес Доставки"></input>
                    <div className="cart-form__price-box">
                        <span className="text__size_l">Итого: </span>
                        <span className="text__size_lb">{basket.getTotalAmount()} руб.</span>
                    </div>
                    <input onChange={dummy} className="cart-form__button text__size_m" type="button" value="Оформить заказ" />
                </form>
            </section>
        </>

)};

export default CartPage;