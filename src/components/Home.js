import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Zoom from "react-reveal";
import Newsletter from "./Newsletter";
import Finalfooter from "./Finalfooter";
import { Player } from "video-react";
import "react-alice-carousel/lib/alice-carousel.css";

function Home() {
  const [show, setShow] = useState(false);
  const [prodotti, setProdotti] = useState([]);
  const handleClick = () => {
    setShow(true);
    console.log();
  };

  useEffect(() => {
    const getProduct = async () =>{
      const response  = await fetch("https://red-family-shop.herokuapp.com/prodotti", {
        method: "GET",
        mode : "cors",
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
      })
      if(!response.ok){
        window.alert("query non andata a buon fine")
      }
      const result = await response.json();
      setProdotti(result);
    }
    getProduct()
  },[prodotti])

  return (
    <ContainerContainers>
      <Container>
        <MainVideoContainer>
          <GalleryWrapper>
          <video width="100%" controls>
            <source src="./images/puntata.mp4" type="video/mp4"/>
          </video>
            {/* <GalleryWrapper>
            {show === false ? (
              <ShadowContainer>
                <h1>Guarda la prima puntata di RadioRed</h1>
                <div>
                </div>
                  <button  onClick={handleClick}>
                    
                  </button>
              </ShadowContainer>
            ) : (
              <p></p>
            )}
            <video
              src="./images/semi-completo-format.mp4"
              controls="controls"
              ref={videoElement}
            />
           */}
          </GalleryWrapper>
        </MainVideoContainer>
        <ItemContainer>
          {prodotti.map((element,index) => (
            <SingleItem>
            <img src={"." + element.prodotti_image[0]} />
            <h3>{element.prodotti_name}</h3>
            <p>{element.prodotti_price + " €"}</p>
            <a href={"/prodotto/" + element._id}><img src="./images/preordina-button.png"/></a>
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
  // height: 1200px;
  width: 66.6%;
  background-image: linear-gradient(to right, #0f0f11ea, transparent);
  display: flex;
  margin: 0 auto;
  margin-top: 155px;
  flex-direction: column;
  align-items: flex-start;
  justify-content:flex-start;
  @media (max-width: 1024px) {
    margin-top: 185px;
    width: 960px;
    height: 1200px;
  }
  @media (max-width: 768px) {
    margin-top: 80px;
  }
  @media (max-width: 428px) {
    margin-top: 80px;
    width: 100vw;
    height: 700px;
  }
`;

const MainVideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 960px;
  height: 520px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  
  @media (device-width:2560px){
    width:100%;
    height:90vh;
  }
  @media (max-width: 428px) {
    width: 100vw;
    height: 100vh;
  }
`;
const GalleryWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  video{
    object-fit:cover;
    height:100%;
    @media (max-width:428px){
      width:100%;
      height:100%;
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
    height: 70%;
    margin-top:20px;
    margin-bottom:20px;
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
    &:hover{
      transform: scale(1.1)
    }
    @media screen and (min-width: 2000){
      height:350px;
      width:350px;
    }
    @media (max-width: 428px) {
      height: 100px;
      width: 100px;
    }
  }
  h3 {
    color: white;
    font-size: 1vw;
    text-transform:uppercase;
    @media (max-width: 428px) {
      font-size: 3vw;
    }
  }
  a {
    background-color:transparent;
    border:none;
    color: white;
    margin-top:-40px;
    cursor:pointer;
    &:hover{
      opacity:60%;
    }
    img{
      height:120px;
      width:120px;
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
