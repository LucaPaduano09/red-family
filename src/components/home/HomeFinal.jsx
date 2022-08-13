import React, { useState, useEffect } from "react";
import "./HomeFinal.scss";
import Newsletter from "../Newsletter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../../redux/loaderSlice";
import Gallery from "../gallery/Gallery";
import Products from "../products/Products";

const HomeFinal = () => {
  const [tempLoader, setTempLoader] = useState(true);
  const loader = useSelector((state) => state.loader.loading);
  const dispatch = useDispatch();
  useEffect(()=>{
    tempLoader === true &&
      setTimeout(() => {
        setTempLoader(false);
        dispatch(update(tempLoader));
      }, 1700);
  })
  
  return (
    <div className="Home__container">
      <div
        className={"Home__container__loader"}
        style={loader ? { width: "100%" } : { width: 0 }}
      >
        <img
          id="desktop-loader"
          src="/images/web-rti.jpg"
          alt="Logo"
          style={loader ? { width: "350px" } : { width: 0 }}
        />
      </div>
      <Gallery />
      <Products />
      <Newsletter />
    </div>
  );
};

export default HomeFinal;
