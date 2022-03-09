import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Finalfooter from "./Finalfooter";
function Testi(props) {
  const titoli = props.titoli;
  console.log(titoli);
  return (
    <ContainerContainers>
      <Container>
        <TitleWrapper>
          <h2>TESTI</h2>
        </TitleWrapper>

        {titoli.map((titolo, i) => {
          return (
            <div
              style={{
                position: "relative",
                height: "150px",
                width: "95%",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "center",
                alignContent: "center",
                marginBottom: "10px",
                marginTop: "20px",
                borderRadius: "50px",
              }}
              key={i}
            >
              <SingleContainer>
                <img src="./images/redd.png" alt="" />

                <div class="info-container">
                  <h3>{titolo}</h3>
                  <h4>Red Family</h4>
                </div>

                <Link to={titolo}>
                  vai al testo
                </Link>
              </SingleContainer>
              <Separator></Separator>
            </div>
          );
        })}
      </Container>
      <Finalfooter />
    </ContainerContainers>
  );
}

export default Testi;
const ContainerContainers = styled.div`
  background: url("./images/sfondo-sito1.png");
  background-position: center center;
  background-size: cover;
  position: absolute;
  width: 100vw;
  @media (max-width: 1540px){
    margin-top:100px;
  }
  @media (max-width: 1024px){
    
    margin-top:100px;
  }
  @media screen and (max-width: 769px){
    margin-top:0px;
  }
`;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  background-image: linear-gradient(to right, #0f0f11ea, transparent);
  
  width: 60vw;
  // margin-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media only screen and (device-width: 428px) and (device-height: 926px) {
    width: 100%;
    // margin-top: 80px;
  }
  @media (max-width: 768px) {
    width: 100%;
    // margin-top: 57px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    // margin-top: 80px;
  }
  @media (max-width: 1024px){
    // height:calc(200vh - 100px);
    margin-top:100px;
  }
  @media (max-width: 1540px){
    
    margin-top:100px;
    margin-bottom:50px;
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
  height: 70px;
  // margin-top:95px;
  @media (max-width: 768px) {
    height: 70px;
    margin-top: 0px;
  }

  h2 {
    height: 100%;
    width: 100%;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    letter-spacing: 3px;
    font-family: "Exo 2", sans-serif;
    animation: glow 1.5s ease-in-out infinite alternate;
    @media (max-width: 768px) {
      font-size: 18px;
      letter-spacing: 2px;
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
const SingleContainer = styled.div`
  position: relative;
  height: 150px;
  width: 95%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin-bottom: 10px;
  margin-top: 20px;
  border-radius: 50px;
  @media only screen and (device-width: 428px) and (device-height: 926px) {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    height: 130px;
  }
  :hover {
  }
  h4 {
    color: #778899;
  }
  img {
    height: 100px;
    width: 100px;
    margin-left: 30px;
    @media (max-width: 768px) {
      height: 80px;
      width: 80px;
    }
  }
  h3 {
    margin-left: 100px;
    text-transform: uppercase;
    color: white;
    @media (max-width: 768px) {
      margin-left: 0px;
    }
  }
  .info-container {
    position: relative;
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h4 {
      margin-left: 100px;
      @media (max-width: 768px) {
        margin-left: 0px;
      }
    }
    @media screen and (max-width: 1540px){
      width:60%;
    }
  }
  a {
    color: white;
    :hover {
      text-decoration: none;
      color: red;
      opacity: 90%;
      cursor: pointer;
    }
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;
const Separator = styled.div`
  position: relative;
  height: 1px;
  width: 100%;
  background-image: linear-gradient(to right, #fff, transparent);
`;
