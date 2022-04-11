import React, { useState } from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import ShareLink from "react-facebook-share-link";
import Finalfooter from "./Finalfooter";

function Video() {
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

  return (
    <ContainerContainers>
      <Container>
        <TitleWrapper>
          <h2>Ultimo Video</h2>
        </TitleWrapper>

        <MainVideoWrapper>
          <ImageWrapper>
            <Zoom>
              <iframe
                width="80%"
                height="400px"
                src="//www.youtube.com/embed/2q6PsjEPYic"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowfullscreen="allowFullScreen"
              ></iframe>
            </Zoom>
          </ImageWrapper>
          <DescriptionWrapper>
            <h1>Red Family</h1>
            <h2>Titolo Brano: In Form</h2>
            <h3>Data di pubblicazione: 01/01/2022</h3>
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
              Gianni Red & Loris Bastr presentano : " In Form "
            </p>
              <p>Suoni : Red Family</p>
              <p>Regia : Red Family</p>
              <p>Produzione Video: 56K productions</p>
          </DescriptionWrapper>
        </MainVideoWrapper>

        <TitleWrapper2>
          <h2>Altri Video</h2>
        </TitleWrapper2>
        <MoreVideoWrapper>
          <Zoom>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/nvBjJjiw_RI?controls=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowFullScreen"
            ></iframe>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/XT1lkw1HLN0?controls=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowFullScreen"
            ></iframe>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/Se-lcZp-Zd8?controls=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowFullScreen"
            ></iframe>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/9_H6wGRkik0?controls=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowFullScreen"
            ></iframe>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/oHTA1TvaDRk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/BuBXjO6YoZs?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/0N0CqBlrzzA?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/Dofn3Nn3Tu8?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Zoom>
        </MoreVideoWrapper>
      </Container>
      <Finalfooter />
    </ContainerContainers>
  );
}

export default Video;

const ContainerContainers = styled.div`
  background: url("./images/sfondo-sito1.png");
  background-position: center center;
  background-size: cover;
  background-repeat:repeat;
  position: absolute;
  margin-top:-24px;
  width: 100vw;
`;

const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 1900px;
  background-image: linear-gradient(to right, #0f0f11ea, transparent);
  display: flex;
  margin: 0 auto;
  margin-top: 180px;
  margin-bottom:50px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    margin-top: 185px;
    width: 100vw;
    height: 1900px;
  }
  @media (max-width: 768px){
    margin-top:100px;
    height: 3300px;
  }
  @media (max-width:376px){
    height:3500px;
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
const TitleWrapper2 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  border-bottom: 3px solid rgb(168, 11, 11);
  border-top: 3px solid rgb(168, 11, 11);
  color: white;
  text-align: center;
  height: 80px;
  overflow-y: hidden;
  @media screen and (device-width: 428px) and (device-height: 926px) {
    margin-top: 50px;
    height: 70px;
  }
  @media (max-width: 768px) {
    height: 70px;
    margin-top: 20px;
  }
  @media screen and (max-width: 425px) {
    margin-top: 55px;
  }
  h2 {
    font-weight: bold;
    height: 100%;
    width: 100%;
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: visible;
    overflow-x: auto;
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

const MainVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 573px;
  margin: 0 auto;
  display: -moz-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-top:20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: 700px;
    position: relative;
    margin-top: 0px;
  }
  @media screen and (max-width: 425px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 376px){
    margin-top:0px;
  }
  @media only screen and (device-width: 428px) and (device-height: 926px) {
    margin-top: 0px;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  width: 70%;

  height: 50%;

  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
    margin-top: 30px;
    justify-content: flex;
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
  width: 30%;
  text-align: left;
  color: white;
  padding: 15px;
  margin-top: 210px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 15px;
    margin-top: 170px;
    padding: 0px;
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
const MoreVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0px;
  grid-gap: 2px;

  @media (min-width: 1400px) {
    flex-direction: row;
  }
  @media (max-width: 992px) {
    grid-template-columns: auto;
  }
  iframe {
    text-align: center;
    font-size: 30px;
    @media (max-width: 768px) {
      width: 100vw;
    }
  }
`;
