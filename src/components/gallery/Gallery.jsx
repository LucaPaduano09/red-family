import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { play, stop } from "../../redux/playerSlice";
import {isMobile} from 'react-device-detect';
import Iframe from "react-iframe-click";
import "./Gallery.scss";

const Gallery = (props) => {
  const videos = [
    {
      src: "https://www.youtube.com/embed/01QbeS4G8FM",
      title: "red family tranquill",
      type: "youtube",
      id: 0,
    },
    {
      src: "/images/puntata-10.mp4",
      title: "red radio pt 10",
      type: "project",
      id: 1,
    },
    {
      src: "/images/puntata-9.mp4",
      title: "red radio pt 9",
      type: "project",
      id: 2,
    },
    {
      src: "/images/puntata-8.mp4",
      title: "red radio pt 8",
      type: "project",
      id: 3,
    },
  ];
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player.playing);
  const [playing, setPlaying] = useState(false);
  const [transform, setTransform] = useState("Reset");
  const handleArrowClick = (direction) => {
    if (direction === "right") {
      switch (transform) {
        case "Reset":
          setTransform("1");
          break;
        case "1":
          setTransform("2");
          break;
        case "2":
          setTransform("3");
          break;
        case "3":
          setTransform("Reset");
          break;
      }
    } else if (direction === "left") {
      switch (transform) {
        case "Reset":
          setTransform("3");
          break;
        case "3":
          setTransform("2");
          break;
        case "2":
          setTransform("1");
          break;
        case "1":
          setTransform("Reset");
          break;
      }
    }
  };
  const handleDotClick = (index) => {
    dispatch(stop());
    setPlaying(false);
    setTransform(index);
  };
  const handleToggleVideo = (player) => {
    player === false ? dispatch(play()) : dispatch(stop());
    playing === true ? setPlaying(false) : setPlaying(true);
  };
  const handleTransform = (transform) => {
    switch (transform) {
      case "Reset":
        setTransform("1");
        break;
      case "1":
        setTransform("2");
        break;
      case "2":
        setTransform("3");
        break;
      case "3":
        setTransform("Reset");
        break;
    }
  };
  useEffect(() => {
    if (player === false) {
      let timer = setTimeout(() => {
        handleTransform(transform);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    } else {
    }
  }, [transform, playing]);
  return (
    <div className="Gallery__container">
      <div className="Gallery__container__gallery">
        {playing === false && (
          <div
            className="Gallery__container__gallery__leftArrow"
            onClick={() => handleArrowClick("left")}
          >
            <img
              className="Gallery__container__gallery__leftArrow__img"
              src="/images/l-arrow.png"
              alt=""
            />
          </div>
        )}
        <div
          className={
            "Gallery__container__gallery__slideContainer__transform" + transform
          }
        >
          {videos.map((x) => (
            <>
              <li
                className="Gallery__container__gallery__slideContainer__slide"
                key={x.title}
              >
                {x.type === "project" && (
                  <video
                    id="desktopVideo"
                    controls
                    src={x.src + "#t=0.001"}
                    preload="metadata"
                    onPause={() => handleToggleVideo(player)}
                    onPlay={() => handleToggleVideo(player)}
                    className={playing === false ? "Disabled" : "Active"}
                  />
                )}
                {x.type === "youtube" && (
                  <Iframe
                    frameBorder={0}
                    src={"https://www.youtube.com/embed/01QbeS4G8FM"}
                    onInferredClick={() => handleToggleVideo(playing)}
                    onPause={() => handleToggleVideo(playing)}
                  ></Iframe>
                )}
                {playing === false && x.type !== "youtube" && 
                  <div className="Gallery__container__gallery__slideContainer__slide__title">
                    {isMobile && (
                      <img
                        className="Gallery__container__gallery__slideContainer__slide__title__logo"
                        src="./images/red-profile.jpg"
                      />
                    )}
                    <p className="Gallery__container__gallery__slideContainer__slide__title__text">
                      {x.title}
                    </p>
                  </div>
                }
              </li>
            </>
          ))}
        </div>
        {playing === false && (
          <div
            className="Gallery__container__gallery__rightArrow"
            onClick={() => handleArrowClick("right")}
          >
            <img
              className="Gallery__container__gallery__rightArrow__img"
              src="/images/r-arrow.png"
              alt=""
            />
          </div>
        )}
      </div>
      <div className="Gallery__container__dots">
        <div
          className={
            "Gallery__container__dots__dot" +
            (transform === "Reset" ? "__active" : "")
          }
          onClick={() => {
            handleDotClick("Reset");
          }}
        ></div>
        <div
          className={
            "Gallery__container__dots__dot" +
            (transform === "1" ? "__active" : "")
          }
          onClick={() => {
            handleDotClick("1");
          }}
        ></div>
        <div
          className={
            "Gallery__container__dots__dot" +
            (transform === "2" ? "__active" : "")
          }
          onClick={() => {
            handleDotClick("2");
          }}
        ></div>
        <div
          className={
            "Gallery__container__dots__dot" +
            (transform === "3" ? "__active" : "")
          }
          onClick={() => {
            handleDotClick("3");
          }}
        ></div>
      </div>
    </div>
  );
};

export default Gallery;
