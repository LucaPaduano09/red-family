import React, { useState, useEffect } from "react";
import "./Products.scss";

const Products = () => {
  const [prodotti, setProdotti] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        "https://red-family-shop.herokuapp.com/prodotti",
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        window.alert("query non andata a buon fine");
      }
      const result = await response.json();
      setProdotti(result);
    };
    getProduct();
  }, [prodotti]);
  return (
    <div className="Products__container">
      <div className="Products__container__products">
        {prodotti.map((element) => (
          <div
            className="Products__container__products__product"
            key={element.prodotti_name}
          >
            <img
              className="Products__container__products__product__productImage"
              src={"." + element.prodotti_image[0]}
            />
            <h3 className="Products__container__products__product__title">
              {element.prodotti_name}
            </h3>
            <p className="Products__container__products__product__price">
              {element.prodotti_price + " €"}
            </p>
            <a href={"/prodotto/" + element._id}>
              <img
                className="Products__container__products__product__buttonImage"
                src="./images/preordina-button.png"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
