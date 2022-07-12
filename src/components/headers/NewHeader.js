import { useState, React } from "react";
import "./NewHeader.scss";
import { Link } from "react-router-dom";

const NewHeader = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <div className="NewHeader__container">
      <div className="NewHeader__container__menu">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="NewHeader__container__menu__option">Home</p>
        </Link>
        <Link to="/video" style={{ textDecoration: "none" }}>
          <p className="NewHeader__container__menu__option">Video</p>
        </Link>
        <Link to="/radio" style={{ textDecoration: "none" }}>
          <p className="NewHeader__container__menu__option">Radio</p>
        </Link>
        <Link to="/testi" style={{ textDecoration: "none" }}>
          <p className="NewHeader__container__menu__option">Testi</p>
        </Link>
      </div>
      <Link to="/">
        <div className="NewHeader__container__logo">
          <img src="/images/web-rti.jpg" alt="Logo" />
        </div>
      </Link>
      <div className="NewHeader__container__social">
        <a
          target={"blank"}
          href="https://open.spotify.com/artist/1XXWmjLKrmLfAaeAnfRYm5"
          className="NewHeader__container__social__option"
        >
          <img src="/images/spotify-icona1.png" alt="Logo-spotify" />
        </a>
        <a
          target={"blank"}
          href="https://www.facebook.com/redfamilymusic/"
          className="NewHeader__container__social__option"
        >
          <img src="/images/facebook-icona1.png" alt="Logo-facebook" />
        </a>
        <a
          target={"blank"}
          href="https://www.instagram.com/redfamilymusic/?hl=it"
          className="NewHeader__container__social__option"
        >
          <img src="/images/instagram-icona1.png" alt="Logo-instagram" />
        </a>
        <a
          target={"blank"}
          href="https://www.youtube.com/channel/UCF245xSYIkQMAw-k1kJu_Mg"
          className="NewHeader__container__social__option"
        >
          <img src="/images/youtube-icona1.png" alt="Logo-youtube" />
        </a>
      </div>
      <div
        className="NewHeader__container__hamburgerMenu"
        onClick={() => setBurgerStatus(true)}
      >
        <img src="/images/hamburger-menu3.png" alt="" />
      </div>

      <div
        className="NewHeader__container__hamburgerMenu__container"
        style={burgerStatus ? { width: "100vw" } : { width: 0 }}
      >
        {burgerStatus && (
          <div
            className="NewHeader__container__hamburgerMenu__container__close"
            onClick={() => setBurgerStatus(false)}
          >
            <img src="/images/chiudi-pagina2.png" alt="" />
          </div>
        )}
        {burgerStatus && (
          <div className="NewHeader__container__hamburgerMenu__container__menu">
            <Link to="/" onClick={() => setBurgerStatus(false)} className="NewHeader__container__hamburgerMenu__container__menu__option">
              Home
            </Link>
            <Link to="/video" onClick={() => setBurgerStatus(false)} className="NewHeader__container__hamburgerMenu__container__menu__option">
              Video
            </Link>
            <Link to="/radio" onClick={() => setBurgerStatus(false)} className="NewHeader__container__hamburgerMenu__container__menu__option">
              Radio
            </Link>
            <Link to="/testi" onClick={() => setBurgerStatus(false)} className="NewHeader__container__hamburgerMenu__container__menu__option">
              Testi
            </Link>
          </div>
        )}
        {burgerStatus && (
          <div className="NewHeader__container__hamburgerMenu__container__social">
            <a
              target="blank"
              href="https://www.youtube.com/channel/UCF245xSYIkQMAw-k1kJu_Mg"
              className="NewHeader__container__hamburgerMenu__container__social__link"
            >
              <img
                className="NewHeader__container__hamburgerMenu__container__social__link__image"
                src="/images/youtube-icona1.png"
                alt=""
              />
            </a>
            <a
              target="blank"
              href="https://open.spotify.com/artist/1XXWmjLKrmLfAaeAnfRYm5"
              className="NewHeader__container__hamburgerMenu__container__social__link"
            >
              <img
                className="NewHeader__container__hamburgerMenu__container__social__link__image"
                src="/images/spotify-icona1.png"
                alt=""
              />
            </a>
            <a
              target="blank"
              href="https://www.facebook.com/redfamilymusic/"
              className="NewHeader__container__hamburgerMenu__container__social__link"
            >
              <img
                className="NewHeader__container__hamburgerMenu__container__social__link__image"
                src="/images/facebook-icona1.png"
                alt=""
              />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/redfamilymusic/?hl=it"
              className="NewHeader__container__hamburgerMenu__container__social__link"
            >
              <img
                className="NewHeader__container__hamburgerMenu__container__social__link__image"
                src="/images/instagram-icona1.png"
                alt=""
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewHeader;
