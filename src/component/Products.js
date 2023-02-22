import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, STATUSES } from "../store/productSlice";

const Products = () => {
  const { data: products, status } = useSelector((state) => state.product);
  //const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data)
    // };

    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const productsElement = products.map((product) => (
    <div className="card" key={product.id}>
      <img src={product.image} alt="product img"></img>
      <h4>{product.title}</h4>
      <h5>{product.price} $</h5>
      <button onClick={() => handleAdd(product)} className="btn">
        Add to cart
      </button>
    </div>
  ));

  if (status === STATUSES.LOADING) {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  //if there is any error in the data fetching
  if(status === STATUSES.ERROR) {
    return  <h1>SOMETHING WENT WRONG !</h1>
  }

  return <div className="productsWrapper">{productsElement}</div>;
};

export default Products;
