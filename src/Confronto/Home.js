import React, { useEffect } from "react";
import "./confronto.css";
import { useDispatch, useSelector } from "react-redux";
import { data, compareHandler, singleProductHandler } from "./Slice/compareSlice";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(data());
  }, []);

  const compareData = useSelector((state) => {
    return state.compare;
  });

  const handleCompareClick = (event, element) => {
    event.preventDefault();
   ;
  };

  return (
    <div className="mobile">
      {compareData.products.map((element) => {
        const isAddedToCompare = compareData.comparison.some((product) => product.id === element.id);

        return (
          <div className="models" key={element.id}>
            <Link to="/Singleproduct" onClick={() => { dispatch(singleProductHandler(element)); }}>
              <img src={element.image} alt={element.model} />
            </Link>
            <h3>{element.brand}</h3>
            <p>{element.model}</p>
            {isAddedToCompare ? (
              <Link className="compare">ADDED TO COMPARE</Link>
            ) : (
              <Link className="compare" onClick={() =>  dispatch(compareHandler(element))}>ADD TO COMPARE</Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
