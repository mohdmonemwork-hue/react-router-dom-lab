import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  async function getStudent() {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${productId}`,
    );
    setProduct(response.data);
  }

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <>
          <h2>{product.title}</h2>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default ProductDetails;
