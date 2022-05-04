import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Zoom } from "react-reveal";

const Radio = () => {
  return (
    <ContainerContainers>
      <Container>
        <TitleWrapper>
          <h2>Ultima Puntata</h2>
        </TitleWrapper>

        <MainVideoWrapper>
          <ImageWrapper>
            <Zoom>
              <video width="80%" controls>
                <source
                  src="./images/puntata-6.mp4#t=0.001"
                  preload="metadata"
                  type="video/mp4"
                />
              </video>
            </Zoom>
          </ImageWrapper>
        </MainVideoWrapper>

        <TitleWrapper>
          <h2>Altre Puntate</h2>
        </TitleWrapper>

        <MoreVideoWrapper>
          <ImageWrapper2>
            <Zoom>
              <video width="80%" controls>
                <source
                  src="./images/pt-completa.mp4#t=0.001"
                  preload="metadata"
                  type="video/mp4"
                />
              </video>
            </Zoom>
          </ImageWrapper2>
          <ImageWrapper2>
            <Zoom>
              <video width="80%" controls>
                <source
                  src="./images/puntata-2.mp4#t=0.001"
                  preload="metadata"
                  type="video/mp4"
                />
              </video>
            </Zoom>
          </ImageWrapper2>
          <ImageWrapper2>
            <Zoom>
              <video width="80%" controls>
                <source
                  src="./images/puntata-3.mp4#t=0.001"
                  preload="metadata"
                  type="video/mp4"
                />
              </video>
            </Zoom>
          </ImageWrapper2>
          <ImageWrapper2>
            <Zoom>
              <video width="80%" controls>
                <source
                  src="./images/puntata-4.mp4#t=0.001"
                  preload="metadata"
                  type="video/mp4"
                />
              </video>
            </Zoom>
          </ImageWrapper2>
          <ImageWrapper2>
            <Zoom>
              <video width="80%" controls>
                <source
                  src="./images/puntata-5.mp4#t=0.001"
                  preload="metadata"
                  type="video/mp4"
                />
              </video>
            </Zoom>
          </ImageWrapper2>
        </MoreVideoWrapper>
      </Container>
    </ContainerContainers>
  );
};

export default Radio;

const ContainerContainers = styled.div`
  background: url("./images/sfondo-sito1.png");
  background-position: center center;
  background-size: cover;
  background-repeat: repeat;
  position: absolute;
  // margin-top: -24px;
  width: 100vw;
  min-height: 1850px;
`;

const Container = styled.div`
  position: relative;
  width: 1180px;
  // min-height:1200px;
   height:100%;
  background-image: linear-gradient(to right, #0f0f11ea, transparent);
  display: flex;
  margin: 0 auto;
  margin-top: 155px;
  margin-bottom: 150px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    margin-top: 185px;
    width: 100vw;
    height: 100%;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
    // height: 3300px;
  }
  @media (max-width: 376px) {
    // height: 3500px;
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
  // height: 80px;
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
  //   height: 573px;
  margin: 0 auto;
  margin-top: 20px;
  display: -moz-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-top:20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    // height: 700px;
    position: relative;
    margin-top: 0px;
  }
  @media screen and (max-width: 425px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 376px) {
    margin-top: 0px;
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
const ImageWrapper2 = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  margin-top: 30px;
  width: 100%;
  // height:400px;
  &:last-child {
    margin-bottom: 50px;
  }
  &:first-child {
    margin-top: 20px;
  }
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
  width: 100%;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
  img {
    height: 40px;
    width: 40px;
    padding: 5px;
    margin-right: 10px;
    transition: all 0.3s ease-in-out;
    :hover {
      transform: scale(1.2);
    }
    @media (max-width: 375px) {
      height: 40px;
      width: 40px;
      margin-right: 5px;
    }
  }
  p {
    position: relative;
    font-size: 20px;
    margin-right: 40px;
    width: 20%;
    @media (max-width: 768px) {
      width: 20%;
    }
    @media (max-width: 375px) {
      margin-right: 20px;
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
  grid-template-columns: 1fr;
  grid-column-gap: 0px;
  grid-gap: 2px;

  @media (min-width: 1400px) {
    flex-direction: row;
  }
  @media (max-width: 992px) {
    grid-template-columns: auto;
  }
  Video{
    margin-top:50px;
  }
  }
`;
