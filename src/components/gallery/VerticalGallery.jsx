import React, { useState, useEffect } from "react";
import useGallery from "../../hooks/useGallery";
import "./VerticalGallery.scss";

const VerticalGallery = (props) => {
  const [slidesNumber, setSlidesNumber] = useState([]);
  const [dotClicked, setDotclicked] = useState(false);
  const gallery = useGallery(props.videos)

  return (
    <div className="VerticalGallery__container">
      <div className="VerticalGallery__container__dots">
        {props.videos.map((v,index) => (
          <div
          key={v.title}
            className={
              "VerticalGallery__container__dots__dot" +
                (gallery.transform.id === v.id ? "__active":"")
            }
            onClick={() => gallery.handleDotClick(v.id, gallery.getId(props.videos))}
          ></div>
        ))}
      </div>
      <div
        className={"VerticalGallery__container__slideContainer__transform" + gallery.transform.id}
      >
        {props.videos.map((v) => (
          <div
            className="VerticalGallery__container__slideContainer__slide"
            style={{ backgroundColor: v.bgColor }}
            key={v.title}
          >
            <div className="VerticalGallery__container__slideContainer__slide__title">
              {v.title}
            </div>
            <div className="VerticalGallery__container__slideContainer__slide__content">
              {v.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalGallery;
