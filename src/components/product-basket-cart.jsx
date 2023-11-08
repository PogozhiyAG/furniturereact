import React from "react";

const ProductBasketCart = ({productEntry, basket}) => {
    const dummy = () => 1;

    const onCountChange = (event) =>{
        basket.set(productEntry.product, Number(event.target.value));
    };

    return(
        <div className="cart-item">
            <img className="cart-item__product-image" src={"img/product/" + productEntry.product.imageUrl} alt={productEntry.product.name}></img>
            <div className="cart-item__box">
                <a href="" className="link_hover">
                    <h3 className="text__size_lb">{productEntry.product.name}</h3>
                </a>
                <p className="cart-item__product-desc text__size_s text_color_gray">{productEntry.product.description}</p>
                <p className="text__size_mb text_color_quite-dark">{productEntry.product.price} руб.</p>
                <div className="cart-item__command-bar text__size_s">
                    <a href="" className="link_hover">Избранные</a>
                    <a href="" className="link_hover">Удалить</a>
                </div>
            </div>
            <input onChange={onCountChange} className="cart-item__count" type="number" name="" id="" min="1" value={productEntry.quantity} />
        </div>
        
    );
}

export default ProductBasketCart;