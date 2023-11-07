import React from "react";

const PageHeader = () => (
  <header className="header position__center text__color_light">
      <div className="header__container">
          <div className="text__size_xl">
              Интерьер.
          </div>
          <nav className="header__nav-container text__size_m">
              <a href="index.html" className="link_hover">Каталог</a>
              <a href="cart.html" className="link_hover">Корзина</a>
          </nav>
      </div>
  </header>
);

export default PageHeader;