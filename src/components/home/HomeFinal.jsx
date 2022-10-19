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
  useEffect(() => {
    tempLoader === true &&
      setTimeout(() => {
        setTempLoader(false);
        dispatch(update(tempLoader));
      }, 1700);
  });

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
      <Gallery
        videos={[
          {
            src: "/images/puntata-2-radio2.mp4",
            title: "red radio2 pt 2",
            type: "project",
            id: "Reset",
            size: "story"
          },
          {
            src: "/images/puntata-1-radio2.mp4",
            title: "red radio2 pt 1",
            type: "project",
            id: "1",
            size: "story"
          },
          {
            src: "/images/puntata-11.mp4",
            title: "red radio pt 11",
            type: "project",
            id: "2",
          },
          {
            src: "https://www.youtube.com/embed/01QbeS4G8FM",
            title: "red family tranquill",
            type: "youtube",
            id: "3",
          },
        ]}
      />
      <Products />
      <Newsletter />
    </div>
  );
};

export default HomeFinal;
