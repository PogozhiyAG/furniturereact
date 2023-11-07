import React from "react";
import ProductCart from "./product-cart";

const ProductList = ({productList}) =>{

    return(
        <section className="position__center position__gap_small">
            <div className="product__list-content">
                { productList.map(product => (<ProductCart key={product.name} product={product}/>)) }
            </div>
        </section>
    );
}

export default ProductList;