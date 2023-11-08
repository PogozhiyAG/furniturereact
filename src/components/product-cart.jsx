import React from "react";

const ProductCart = ({product, basket}) => {
    
    const addToCartClickHandler = () => basket.add(product);

    return(
        <div className="product__box" key={product.name}>
            <div className="product__image-command-container">
                <div className="product__command-bar">
                    <img className="product__command-button" src="img/heart-outline.svg" alt="Добавить в избранное" />
                    <img className="product__command-button" onClick={addToCartClickHandler} src="img/shopping-bag-line.svg" alt="Добавить в корзину" />
                </div>
                <img className="product__image" src={"img/product/" + product.imageUrl} alt={product.name}/>
            </div>
            <h3 className="product__title text__size_lb">{product.name}</h3>
            <p className="product__desc text__size_s text_color_gray">{product.description}</p>
            <p className="text__size_lb text_color_quite-dark">{product.price} руб.</p>
    
        </div>
    );
}

export default ProductCart;