import React, { useState } from "react";
import ProductCart from "./product-cart";

const ProductList = ( {catalogData, basket} ) => {
    const [sortOrder, setSortOrder] = useState('');

    const onSortOrderChangeHandler = event => setSortOrder(event.target.value);

    const getOrderFunction = () => {
        switch (sortOrder) {
            case 'price_desc': return (a, b) => b.price - a.price;
            default:           return (a, b) => a.price - b.price;
        }
    }

    const buttonAddClick = () =>{
        basket.add(catalogData[0]);
    }
    const buttonSetClick = () =>{
        basket.set(catalogData[0], 5);
    }
    const buttonClearClick = () =>{
        basket.clear();
    }

    return(
        <>
            <section className="position__center position__gap_small">
                <div className="command-bar">
                    <select className="command-bar-select text__size_m" onChange={onSortOrderChangeHandler}>                
                        <option value="price_asc">Порядок: сперва дешевые</option>
                        <option value="price_desc">Порядок: сперва дорогие</option>                
                    </select>
                </div>
                <div className="product__list-content">
                    {
                        catalogData
                            .sort(getOrderFunction())
                            .map(product => (<ProductCart key={product.name} product={product} basket={basket}/>)) 
                    }
                </div>
                {JSON.stringify(basket.basketItems)}
                
                <button onClick={buttonAddClick}>Add</button>
                <button onClick={buttonSetClick}>Set</button>
                <button onClick={buttonClearClick}>Clear</button>
                {basket.getTotalAmount()}
            </section>
        </>
    );
}

export default ProductList;