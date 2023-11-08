import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import catalogData from "./data"
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";


const App = () => {
    const [basketItems, setBasketItems] = useState([]);

    const basket = {
        basketItems,        
        add: (product) => {              
            let found = false;
            let newItems = basketItems.map(entry => {
                if(entry.product === product){
                    found = true;
                    if(product.available > entry.quantity){
                        entry.quantity += 1;
                    }
                }
                return entry;
            });
            if(!found){
                newItems.push({product, quantity: 1})
            }
            setBasketItems(newItems);
        },   
        set: (product, quantity) => {
            if(product.available < quantity){
                return;
            }
            let newItems = [];  
            if(quantity > 0){
                let found = false;
                newItems = basketItems.map(entry => {
                    if(entry.product === product){
                        found = true;
                        entry.quantity = quantity;
                    }
                    return entry;
                });  
                if(!found){
                    newItems.push({product, quantity})
                }
            }
            else{
                newItems = basketItems.filter(entry => entry.product !== product)
            }
            setBasketItems(newItems);
        },
        getTotalAmount: () => basketItems.reduce((a, p) => a + p.quantity * p.product.price, 0) ,    
        clear: () => setBasketItems([])
    };



    const router = createBrowserRouter([
        {
            path: "/",
            element: <CatalogPage catalogData={catalogData} basket={basket} />,
        },
        {
            path: "cart",
            element: <CartPage basket={basket}/>,
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default App;