import React from "react";
import PageHeader from "./components/page-header"
import catalogData from "./data"
import ProductList from "./components/product-list"

export default () => (
  <>
    <PageHeader/>    
    <ProductList productList={catalogData}/>    
  </>
);
