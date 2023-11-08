import React from "react";

const ProductCart = ({product, basket}) => {
    
    return(
        <div className="product__box" key={product.name}>
            <a href="" className="link_hover">
                <img className="product__image" src={"img/product/" + product.imageUrl} alt={product.name}></img>
                <h3 className="product__title text__size_lb">{product.name}</h3>
            </a>
            <p className="product__desc text__size_s text_color_gray">{product.description}</p>
            <p className="text__size_lb text_color_quite-dark">{product.price} руб.</p>
    
        </div>
    );
}

export default ProductCart;