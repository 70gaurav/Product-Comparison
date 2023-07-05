// Compare.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productDeleteHandler } from "./Slice/compareSlice";

function Compare() {
  const dispatch = useDispatch();
  const compare = useSelector((state) => state.compare.comparison);

  const handleRemoveProduct = (index) => {
    dispatch(productDeleteHandler(index));
  };

  return (
    <div className="comparison">
      {compare.length > 0 ? (
        compare.map((product, index) => (
          <div key={index} className="item">
            <img src={product.image} alt="" />
            <ul>
              <li>
                <h4>Model: {product.model}</h4>
              </li>
              <li>
                <h4>Rear camera: {product.rear_camera}</h4>
              </li>
              <li>
                <h4>Front camera: {product.front_camera}</h4>
              </li>
              <li>
                <h4>Screen: {product.screen}</h4>
              </li>
              <li>
                <h4>
                  Cost: <span>{product.cost}$</span>
                </h4>
              </li>
              <li>
                <h4>Storage: {product.storage}</h4>
              </li>
              <li>
                <h4>Os: {product.os}</h4>
              </li>
            </ul>
            <Link
              className="compare"
              onClick={() => handleRemoveProduct(index)}
            >
              Remove
            </Link>
          </div>
        ))
      ) : (
        <p>No products added to compare</p>
      )}
    </div>
  );
}

export default Compare;
