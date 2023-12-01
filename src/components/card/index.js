import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const Card = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    setProducts(json.products.slice(1, 4));
    console.log(json);
  };

  const dispatch = useDispatch();

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="card-container">
      {products.map((product, index) => {
        return (
          <div key={index} className="card">
            <img
              src={product.thumbnail}
              alt="products images"
              className="product-img"
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>₹ {product.price}</p>
            <button onClick={() => handleAddItem(product)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
