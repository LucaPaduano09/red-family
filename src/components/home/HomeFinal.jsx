import React, { useState, useEffect } from "react";
import "./HomeFinal.scss";
import Newsletter from "../Newsletter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../../redux/loaderSlice";
import { play, stop } from "../../redux/playerSlice";
import Iframe from "react-iframe-click";

const HomeFinal = () => {
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
  const [indexVideo, setIndexVideo] = useState(0);
  const [tempLoader, setTempLoader] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [transform, setTransform] = useState("Reset");
  const [active, setActive] = useState(0);
  const loader = useSelector((state: any) => state.loader.loading);
  const player = useSelector((state: any) => state.player.playing);
  const dispatch = useDispatch();
  const [prodotti, setProdotti] = useState([]);

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
  const handleTogglePlaying = () => {
    playing ? setPlaying(false) : setPlaying(true);
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
    const getProduct = async () => {
      const response = await fetch(
        "https://red-family-shop.herokuapp.com/prodotti",
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        window.alert("query non andata a buon fine");
      }
      const result = await response.json();
      setProdotti(result);
    };
    if (tempLoader === true) {
      let timer = setTimeout(() => {
        setTempLoader(false);
        dispatch(update(tempLoader));
      }, 1700);
      return () => {
        clearTimeout(timer);
      };
    }
    getProduct();
  }, [prodotti]);

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
      <div className="Home__container__gallery">
        <div
          className="Home__container__gallery__leftArrow"
          onClick={() => handleArrowClick("left")}
        >
          <img
            className="Home__container__gallery__leftArrow__img"
            src="/images/l-arrow.png"
            alt=""
          />
        </div>
        <div
          className={
            "Home__container__gallery__slideContainer__transform" + transform
          }
        >
          {videos.map((x) => (
            <>
              <li
                className="Home__container__gallery__slideContainer__slide"
                key={x.title}
              >
                {x.type === "project" && (
                  <video
                    id="desktopVideo"
                    controls
                    src={x.src + "#t=0.001"}
                    preload="metadata"
                    // type="video/mp4"
                    onClick={() => handleToggleVideo(player)}
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
                  <p className="Home__container__gallery__slideContainer__slide__title">
                    {x.title}
                  </p>
                )}
              </li>
            </>
          ))}
          {/* {indexVideo === 0 && (
              <iframe
                width="100%"
                height="100%"
                src={videos[0].src}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onPlay={() => handleTogglePlaying()}
              ></iframe>
          )}
          {indexVideo !== 0 && (
            <HammerComponent>
              <video
                id="desktopVideo"
                controls
                src={videos[indexVideo].src + "#t=0.001"}
                preload="metadata"
                type="video/mp4"
                onPlay={() => handleToggleVideo(player)}
                onPause={() => handleToggleVideo(player)}
                className={player === false ? "Disabled" : "Active"}
              />
            </HammerComponent>
          )} */}
        </div>
        <div
          className="Home__container__gallery__rightArrow"
          onClick={() => handleArrowClick("right")}
        >
          <img
            className="Home__container__gallery__rightArrow__img"
            src="/images/r-arrow.png"
            alt=""
          />
        </div>
      </div>
      <div className="Home__container__dots">
        <div
          className={
            "Home__container__dots__dot" +
            (transform === "Reset" ? "__active" : "")
          }
          onClick={() => {
            handleDotClick("Reset");
          }}
        ></div>
        <div
          className={
            "Home__container__dots__dot" + (transform === "1" ? "__active" : "")
          }
          onClick={() => {
            handleDotClick("1");
          }}
        ></div>
        <div
          className={
            "Home__container__dots__dot" + (transform === "2" ? "__active" : "")
          }
          onClick={() => {
            handleDotClick("2");
          }}
        ></div>
        <div
          className={
            "Home__container__dots__dot" + (transform === "3" ? "__active" : "")
          }
          onClick={() => {
            handleDotClick("3");
          }}
        ></div>
      </div>
      <div className="Home__container__products">
        {
          console.log(prodotti)
        }
        {prodotti.map((element) => (
          <div className="Home__container__products__product">
            <img
              className="Home__container__products__product__productImage"
              src={"." + element.prodotti_image[0]}
            />
            <h3 className="Home__container__products__product__title">
              {element.prodotti_name}
            </h3>
            <p className="Home__container__products__product__price">
              {element.prodotti_price + " €"}
            </p>
            <a href={"/prodotto/" + element._id}>
              <img
                className="Home__container__products__product__buttonImage"
                src="./images/preordina-button.png"
              />
            </a>
          </div>
        ))}
      </div>
      <Newsletter />
    </div>
  );
};

export default HomeFinal;
