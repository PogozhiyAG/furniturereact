import React from "react";
import PageHeader from "./components/page-header"
import catalogData from "./data"
import ProductList from "./components/product-list"

function Basket() {

  this.items = {},
  this.name = "Basket",
  this.add = function (id) {
    this.items[id] = 5;
  };  
}

export default () => {
  
  const basket = new Basket();
  basket.add('Стол MENU');

  return (
    <>
      <PageHeader />
      <ProductList productList={catalogData} basket={basket}/>

    </>
  )
};
