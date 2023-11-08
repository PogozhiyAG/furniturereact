import React from "react";
import { Link } from "react-router-dom";

const PageHeader = () => (
    <header className="header position__center text__color_light">
        <div className="header__container">
            <div className="header__logo">
                Интерьер.
            </div>
            <nav className="header__nav-container text__size_m">
                <Link to="/" className="link_hover">Каталог</Link>
                <Link to="/cart" className="link_hover">Корзина</Link>
            </nav>
            <nav className="header__nav-container-mobile">                
                <Link to="/"><img src="img/catalog.svg" alt="Каталог"/></Link>
                <Link to="/cart"><img src="img/cart.svg" alt="Корзина" /></Link>
            </nav>
        </div>
    </header>
);

export default PageHeader;