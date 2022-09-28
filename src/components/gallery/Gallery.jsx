import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { play, stop } from "../../redux/playerSlice";
import { isMobile } from "react-device-detect";
import Iframe from "react-iframe-click";
import "./Gallery.scss";
import { visitParameterList } from "typescript";
import  useGallery  from "../../hooks/useGallery";

const Gallery = (props) => {
  var videos = props.videos;
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player.playing);
  const [playing, setPlaying] = useState(false);
  const gallery  = useGallery(videos);

  return (
    <div className="Gallery__container">
      <div className="Gallery__container__gallery">
        {playing === false && (
          <div
            className="Gallery__container__gallery__leftArrow"
            onClick={() => gallery.handleArrowClick("left")}
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
            "Gallery__container__gallery__slideContainer__transform" + gallery.transform.id
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
                    onPause={() => gallery.handleToggleVideo(player)}
                    onPlay={() => gallery.handleToggleVideo(player)}
                    className={playing === false ? "Disabled" : "Active"}
                  />
                )}
                {x.type === "youtube" && (
                  <Iframe
                    frameBorder={0}
                    src={"https://www.youtube.com/embed/01QbeS4G8FM"}
                    onInferredClick={() => gallery.handleToggleVideo(playing)}
                    onPause={() => gallery.handleToggleVideo(playing)}
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
            onClick={() => gallery.handleArrowClick("right")}
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
              (gallery.transform.id === v.id ? "__active" : "")
            }
            onClick={() => {
              gallery.handleDotClick(v.id, gallery.getId(props.videos));
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
