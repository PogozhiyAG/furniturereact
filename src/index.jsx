import React from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import catalogData from "./data"
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import App from "./App";

// function Basket() {   
//     this.items = [];
//     this.name = "Basket";
//     this.add = function (id) {
//         const item = this.items.find(i => i.id === id);
//         if(item){
//             item.qty++;
//         }else{
//             this.items.push({id, qty: 1});
//         }
//     };
// }

// const basket = new Basket();
// basket.add('Стол MENU');
// basket.add('Шкаф NASTAN');




// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <CatalogPage basket={basket} catalogData={catalogData} />,
//     },
//     {
//         path: "cart",
//         element: <CartPage basket={basket} catalogData={catalogData}/>,
//     },
// ]);

createRoot(document.getElementById('root')).render(
    // <RouterProvider router={router} />
    <App/>
);
