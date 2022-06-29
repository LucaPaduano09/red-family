import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Zoom from "react-reveal";
import Newsletter from "./Newsletter";
import Finalfooter from "./Finalfooter";
import { Player } from "video-react";
import ShareLink from "react-facebook-share-link";
import "react-alice-carousel/lib/alice-carousel.css";

function Home() {
  const [copied, setCopied] = useState(false);

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    alert("URL Copied.");
  }
  const [show, setShow] = useState(false);
  const [prodotti, setProdotti] = useState([]);
  const handleClick = () => {
    setShow(true);
    console.log();
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
    getProduct();
  }, [prodotti]);

  return (
    <ContainerContainers>
      <Container>
          <TitleWrapper>
            <h2>Ultima Uscita</h2>
          </TitleWrapper>
        <MainVideoContainer>
          <ImageWrapper>
            <Zoom>
            <video width="80%" controls>
                <source
                  src="./images/puntata-9.mp4#t=0.001"
                  preload="metadata"
                  type="video/mp4"
                />
              </video>
            </Zoom>
          </ImageWrapper>
          {/* <DescriptionWrapper>
            <h1>Red Family</h1>
            <h2>Titolo Brano: Pippat</h2>
            <h3>Data di pubblicazione: 31/05/2022</h3>
            <MenuSocial>
              <p>condividi:</p>
              <a
                href="whatsapp://send?text=Ciao Ascolta l'ultimo singolo della red http://red-family.netlify.app/video"
                data-action="share/whatsapp/share"
                target="_blank"
              >
                <img src="./images/Share-whatsapp.png" alt="instagram-logo" />
              </a>
              <a
                href="https://t.me/share/url?url= http://red-family.netlify.app/video &text=Ciao Ascolta l'ultimo singolo della red"
                target="_blank"
              >
                <img src="./images/Share-Telegram.png" alt="facebook" />
              </a>
              <button onClick={copy} href="">
                <img src="./images/Share-copy-link.png" alt="copy" />
              </button>

              <ShareLink link="http://red-family.netlify.app/video">
                {(link) => (
                  <a href={link} target="_blank">
                    <img src="./images/share-facebook.png"/>
                  </a>
                )}
              </ShareLink>
            </MenuSocial>
            <p>
              Gianni Red & Loris Bastr presentano : " Pippat"
            </p>
              <p>Suoni : Red Family</p>
              <p>Regia : Red Family</p>
              <p>D.o.p. & camera : Marco Bruno</p>
              <p>Produzione video Red Family</p>
          </DescriptionWrapper> */}
        </MainVideoContainer>
        <ItemContainer>
          {prodotti.map((element, index) => (
            <SingleItem>
              <img src={"." + element.prodotti_image[0]} />
              <h3>{element.prodotti_name}</h3>
              <p>{element.prodotti_price + " €"}</p>
              <a href={"/prodotto/" + element._id}>
                <img src="./images/preordina-button.png" />
              </a>
            </SingleItem>
          ))}
        </ItemContainer>
      </Container>
      <Newsletter />
      <Finalfooter />
    </ContainerContainers>
  );
}

export default Home;

const ContainerContainers = styled.div`
  background: url("../images/sfondo-sito1.png");
  background-position: center center;
  background-size: cover;
  position: absolute;
  width: 100vw;
  // height:100vh;
`;

const Container = styled.div`
  position: relative;
  // width: 1280px;
  width: 66.6%;
  background-image: linear-gradient(to right, #0f0f11ea, transparent);
  display: flex;
  margin: 0 auto;
  margin-top: 155px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    margin-top: 185px;
    width: 960px;
  }
  @media (max-width: 768px) {
    margin-top: 80px;
  }
  @media (max-width: 428px) {
    margin-top: 80px;
    width: 100vw;
  }
`;

const MainVideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;


  @media (device-width: 2560px) {
    width: 100%;
    height: 90vh;
  }
  @media (max-width: 428px) {
    width: 100vw;
    justify-content:center;
    flex-direction:column;
  }
`;
const GalleryWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: flext-start;
  justify-content: flex-start;
  margin-top: 10px;
  video {
    position: relative;
    object-fit: contain;
    height: 400px;
    @media (max-width: 428px) {
      width: 100%;
      height: 100%;
    }
  }
  iframe{
    position:relative;
    height:50%;
    width:50%;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  width: 100%;
  // height:400px;
  video {
    position: relative;
    height: 100%;
    width: 75%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
    margin-top: 30px;
    justify-content: flex;

    video {
      width: 100%;
    }
  }
  img {
    position: relative;
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
      width: 80%;
    }
  }
  iframe {
    margin-right: 10px;
    @media (max-width: 768px) {
      border: 2px solid white;
      height: 300px;
      width: 650px;
      margin-top: 30px;
    }
    @media (max-width: 375px) {
      width: 100%;
      height: 250px;
    }
  }
`;
const DescriptionWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  width: 40%;
  text-align: left;
  color: white;
  padding: 15px;
  margin-top: 210px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 15px;
    margin-top: 170px;
    padding: 10px;
    float: none;
    text-align: left;
  }
  h1 {
    // margin-bottom:30px;
    position: relative;
    width: 100%;
    margin-top: -200px;
    font-size: 25px;
    padding: 2px;
    @media (max-width: 768px) {
      font-size: 20px;
      margin-top: -140px;
    }
  }
  h3 {
    padding: 2px;
    position: relative;
    width: 100%;
    margin-bottom: 10px;
    font-size: 15px;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
  h4 {
    padding: 2px;
    position: relative;
    width: 100%;
    font-size: 15px;
    line-height: 1.8;
    @media (max-width: 768px) {
      width: 100%;
      font-size: 15px;
      font-weight: normal;
    }
  }
  p {
    position: relative;
    width: 100%;
    white-space: pre-line;
  }
  a {
    font-size: 10px;
  }
  h2 {
    position: relative;
    width: 100%;
    font-size: 18px;
    padding: 2px;
    @media (max-width: 768px) {
      width: 100%;
      font-size: 18px;
      font-weight: normal;
    }
  }
`;
const MenuSocial = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  width:100%;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
  img {
    height: 35px;
    width: 35px;
    padding: 5px;
    margin-right: 10px;
    transition: all 0.3s ease-in-out;
    :hover{
      transform: scale(1.2);
    }
    @media (max-width: 428px) {
      height: 35px;
      width: 35px;
      margin-right: 5px;
    }
  }
  p {
    position: relative;
    font-size: 20px;
    margin-right: 40px;
    width:20%;
    @media (max-width: 768px) {
      width: 20%;
    }
    @media (max-width: 428px) {
      margin-right: 50px;
    }
  }
  button {
    background: none;
    border: none;
  }
`;
const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  border-bottom: 3px solid rgb(168, 11, 11);
  color: white;
  text-align: center;
  height: 80px;
  overflow-y: hidden;

  @media (max-width: 768px) {
    height: 70px;
  }

  h2 {
    font-weight: bold;
    height: 100%;
    width: 100%;
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 3px;
    font-family: "Exo 2", sans-serif;
    animation: glow 1.5s ease-in-out infinite alternate;
    @media (max-width: 768px) {
      font-size: 23px;
      letter-spacing: 3px;
    }
  }
  @keyframes glow {
    from {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #b10808,
        0 0 20px #ac0909, 0 0 25px #dd0808;
    }
    to {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #dd0808,
        0 0 40px #dd0808, 0 0 50px #dd0808;
    }
  }
`;

const ShadowContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  h1 {
    position: absolute;
    z-index: 300;
    color: white;
    left: 10%;
    font-size: 2.6vw;
    text-transform: uppercase;
  }
  div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 200;
    background-color: black;
    opacity: 70%;
  }
  button {
    position: absolute;
    top: 45%;
    left: 45%;
    z-index: 300;
    height: 45px;
    width: 45px;
    background-image: url("./images/play.png");
    background-size: cover;
    background-position: center center;
  }
`;

const RightButton = styled.div`
  positon: absolute;
  top: 10px;
  z-index: 1000000;
  font-size: 51vw;
  color: white;
`;

const MoreVideoContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  margin-top: 50px;
  @media (max-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 428px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;
const MoreVideoContainer2 = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 10px;
  margin-top: 25px;
  @media (max-width: 428px) {
    grid-template-columns: 2fr;
  }
`;
const ItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 428px) {
    height: 50%;
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

const SingleItem = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  :hover {
    // transform: scale(1.2);
    // cursor: pointer;
  }
  img {
    position: relative;
    height: 250px;
    width: 250px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    @media screen and (min-width: 2000) {
      height: 350px;
      width: 350px;
    }
    @media (max-width: 428px) {
      height: 100px;
      width: 100px;
    }
  }
  h3 {
    color: white;
    font-size: 1vw;
    text-transform: uppercase;
    @media (max-width: 428px) {
      font-size: 3vw;
    }
  }
  a {
    background-color: transparent;
    border: none;
    color: white;
    margin-top: -40px;
    cursor: pointer;
    &:hover {
      opacity: 60%;
    }
    img {
      height: 120px;
      width: 120px;
    }
  }
  @keyframes glow {
    from {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #b10808,
        0 0 20px #ac0909, 0 0 25px #dd0808;
    }
    to {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #dd0808,
        0 0 40px #dd0808, 0 0 50px #dd0808;
    }
  }
`;
