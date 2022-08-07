import { useState, React, useEffect } from "react";
import "./HomeFinal.scss";
import { Fade } from "react-reveal";
import Newsletter from "../Newsletter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../../redux/loaderSlice";
import { play, stop } from "../../redux/playerSlice";
import HammerComponent from "react-hammerjs";

const HomeFinal = () => {
  const videos = [
    {
      src: "https://www.youtube.com/embed/01QbeS4G8FM",
      title: "red family tranquill",
    },
    { src: "/images/puntata-10.mp4", title: "red radio pt 10" },
    { src: "/images/puntata-9.mp4", title: "red radio pt 9" },
    { src: "/images/puntata-8.mp4", title: "red radio pt 8" },
  ];
  const [indexVideo, setIndexVideo] = useState(0);
  const [tempLoader, setTempLoader] = useState(true);
  const [playing, setPlaying] = useState(false);
  const loader = useSelector((state) => state.loader.loading);
  const player = useSelector((state) => state.player.playing);
  const dispatch = useDispatch();
  var hammer = new HammerComponent();
  const handleArrowClick = (direction) => {
    if (direction === "right") {
      switch (indexVideo) {
        case 0:
          setIndexVideo(1);
          break;
        case 1:
          setIndexVideo(2);
          break;
        case 2:
          setIndexVideo(3);
          break;
        case 3:
          setIndexVideo(0);
          break;
      }
    } else if (direction === "left") {
      switch (indexVideo) {
        case 0:
          setIndexVideo(3);
          break;
        case 1:
          setIndexVideo(0);
          break;
        case 2:
          setIndexVideo(1);
          break;
        case 3:
          setIndexVideo(2);
          break;
      }
    }
  };
  const handleDotClick = (index) => {
    dispatch(stop());
    setIndexVideo(index);
  };
  const handleTogglePlaying = () => {
    console.log(playing)
    playing ? setPlaying(false) : setPlaying(true);
  };
  const handleSwipe = (e) => {
    let pointer = e.originalEvent.changedTouches[0].clientX;
    console.log(pointer);
  };
  const handleToggleVideo = (player) => {
    !player ? dispatch(play()) : dispatch(stop());
  };
  const [prodotti, setProdotti] = useState([]);
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
    tempLoader === true &&
      setTimeout(() => {
        setTempLoader(false);
        dispatch(update(tempLoader));
      }, 1700);
    getProduct();
  }, [prodotti]);

  // useEffect(()=>{
  //   const handlePlayGallery = (player) => {
  //     if(player === false) {
  //       setTimeout(indexVideo <= 2 ? setIndexVideo(indexVideo + 1) : setIndexVideo(0) ,6000)
  //     } else {
  //       console.log(player);
  //     }
  //   };
  //   handlePlayGallery(player)

  // },[])

  return (
    <div className="Home__container">
      <div
        className={"Home__container__loader"}
        style={loader ? { width: "100%" } : { width: 0 }}
      >
        <Fade>
          <img
            id="desktop-loader"
            src="/images/web-rti.jpg"
            alt="Logo"
            style={loader ? { width: "350px" } : { width: 0 }}
          />
        </Fade>
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
        <li className="Home__container__gallery__slide">
          {indexVideo === 0 && (
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
          )}
          {player === false && indexVideo !== 0 && (
            <p className="Home__container__gallery__slide__title">
              {videos[indexVideo].title}
            </p>
          )}
        </li>
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
        {videos.map((v, index) => (
          <div
            className={
              index === indexVideo
                ? "Home__container__dots__dot__active"
                : "Home__container__dots__dot"
            }
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
      <div className="Home__container__products">
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
