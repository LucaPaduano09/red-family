import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Finalfooter from "./Finalfooter";

function TestiDetails(props) {
  const [traduzione, setTraduzione] = useState(false);
  return (
    <ContainerContainers>
    <Container>
      <Link to="/testi">
        <BackButton>
          <img src="./images/back-arrow.png" alt="" />
        </BackButton>
      </Link>
      <InfoContainer>
        <img src={props.immagine} alt="" />
        <DescriptionContainer>
          <h2>{props.titolo}</h2>
          <h5>data di pubblicazione: {props.data}</h5>
          <p>
            {props.desc}
          </p>
          {/* <p>
          Ascoltalo su Spotify : <a href={props.spotify}> {props.spotify}</a>
          </p>
          <p>
          Segui Red Family : 
          </p>
          <p>
              ► Facebook: <a href="https://fb.com/redfamilymusic"> https://fb.com/redfamilymusic</a> 
          </p>
          <p>
          ► Instagram: <a href="https://www.instagram.com/redfamilymusic"> https://www.instagram.com/redfamilymusic</a>
          </p> 
          */}
          <p>Suoni : Red Family</p>
          <p>Regia : Red Family</p>
        </DescriptionContainer>
      </InfoContainer>

      <TestoContainer>
      <button style={{color:"black;",width:"100px",marginLeft:"30px"}} onClick={() => {setTraduzione(false)}}>dialetto</button>
      <button style={{color:"black;",width:"100px"}} onClick={() => {setTraduzione(true)}}>traduzione</button>
        {
          traduzione === false ? <p>{props.testo}</p>: <p>{props.traduzione}</p>
        }
        
      </TestoContainer>
    </Container>
    <Finalfooter />
    </ContainerContainers>
  );
}

export default TestiDetails;

const ContainerContainers = styled.div`
  background: url("./images/sfondo-sito1.png");
  background-position: center center;
  background-size: cover;
  position: absolute;
  width:100vw;
`;

const Container = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;
  background-image: linear-gradient(to right, #0f0f11ea, transparent);
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 87px;
  }
`;

const BackButton = styled.div`
  position: absolute;
  top:0;
  right:5px;
  width: 30px;
  height: 30px;
  z-index:1000;
  margin-bottom:10px;
  img {
    height: 30px;
    width: 30px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  position: relative;
  height: 400px;
  width: 100%;
  margin-top:10px;
  background-color: transparent;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  img {
    height: 350px;
    width: 350px;
    margin-left: 20px;
    margin-top: 20px;
    @media (max-width: 768px) {
      height: 100%;
      width: 100%;
      margin: 0px;
    }
  }
`;
const DescriptionContainer = styled.div`
  position: relative;
  height: 90%;
  width: 60%;
  background-color: transparent;
  color:white;
  margin-right: 20px;
  margin-top: 5px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px;
  white-space: pre-line;
  @media (max-width: 768px) {
    width: 100%;
    // height: 100%;
    margin-right: 0px;
  }
  h2 {
    text-transform: uppercase;
    // line-height:5px;
    margin-top:40px;
  }
  p {
    position: relative;
    width: 100%;
    margin-top: 20px;
    white-space: pre-line;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom:-10px;
    }
  }
  h5{
    line-height:1px;
    margin-bottom:-10px;
  }
`;
const TestoContainer = styled.div`
  position: relative;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
  p {
    color:white;
    line-height: 2;
    padding: 25px;
    font-size: 22px;
    white-space: pre-line;
    @media (max-width: 768px) {
      line-height: 1.5;
      margin-top: 310px;
      font-size: 21px;
    }
  }
  button{
    @media (max-width: 769px){
      margin-top:20px;
    }
  }
`;
