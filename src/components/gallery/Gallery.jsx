import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { play, stop } from "../../redux/playerSlice";
import { isMobile } from "react-device-detect";
import Iframe from "react-iframe-click";
import "./Gallery.scss";
import { visitParameterList } from "typescript";

const Gallery = (props) => {
  var videos = props.videos;
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
  const getId = (videos) => {
    let ids = [];
    videos.forEach((v) => {
      ids.push(v.id);
    });
    return ids;
  };
  const [arrayId, setArrayId] = useState(getId(videos));

  const removeFirstId = (arrayId) => {
    arrayId.shift();
    return arrayId;
  };
  const handleTransform = (id) => {
    setTransform(id);
  };

  useEffect(() => {
    let newArray = [];
    console.log(arrayId);
    if (arrayId.length > 1) {
      newArray = removeFirstId(arrayId);
      setArrayId(newArray);
    } else {
      resetArrayId();
    }
  }, [transform, arrayId]);

  const resetArrayId = () => {
    setArrayId(getId(props.videos));
    return getId(props.videos);
  };

  useEffect(() => {
    console.log(arrayId);
    if (player === false) {
      let timer = setTimeout(() => {
        handleTransform(arrayId[0]);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    } else {
    }
  }, [transform,arrayId.length]);

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
                {playing === false && x.type !== "youtube" && (
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
                )}
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
        {videos.map((v) => (
          <div
            className={
              "Gallery__container__dots__dot" +
              (transform === v.id ? "__active" : "")
            }
            onClick={() => {
              handleDotClick(v.id);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
