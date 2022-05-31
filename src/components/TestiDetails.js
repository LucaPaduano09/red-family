import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Finalfooter from "./Finalfooter";

function TestiDetails(props) {
  const [traduzione, setTraduzione] = useState(false);
  const [dialetto, setDialetto] = useState(true);
  const [italiano, setItaliano] = useState(false);
  
  const handleDialettoClick = () =>{
    setTraduzione(false);
    setDialetto(true)
    setItaliano(false);
  }
  const handleItalianoClick = () =>{
    console.log(italiano);
    setTraduzione(true);
    setDialetto(false);
    setItaliano(true);
    console.log(italiano);
  }
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
          <p>Suoni : Red Family</p>
          <p>Regia : Red Family</p>
        </DescriptionContainer>
      </InfoContainer>

      <TestoContainer>
        <p>Lingue</p>
      <button style={{color:"black;",width:"100px",marginLeft:"15px",}} onClick={() => handleDialettoClick()}>
        {
          dialetto === true ? (
            <img src="./images/dialetto-font-nuovo.png" style={{opacity:"100%",height:"33px"}}/>
          ) : (
            
            <img src="./images/dialetto-font-nuovo.png" style={{opacity:"60%"}}/>
          )
        }
      </button>
      <button style={{color:"black;",width:"100px",}} onClick={() => handleItalianoClick()}>
      {
          italiano === true ? (
            <img src="./images/italiano-font-nuovo.png" style={{opacity:"100%",height:"33px"}}/>
          ) : (
            
            <img src="./images/italiano-font-nuovo.png" style={{opacity:"60%"}}/>
          )
        }
        
      </button>
        {
          traduzione === false ? <p style={{marginTop:"-30px"}}>{props.testo}</p>: <p style={{marginTop:"-30px"}}>{props.traduzione}</p>
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
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
     margin-top: 87px;
  }
`;

const BackButton = styled.div`
  position: absolute;
  top:20px;
  right:5px;
  width: 30px;
  height: 30px;
  z-index:300;
  margin-bottom:10px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  position: relative;
  // height: 400px;
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
  padding: 5px;
  white-space: pre-line;
  @media (max-width: 768px) {
    width: 100%;
    // height: 100%;
    margin-right: 0px;
    margin-top:27px;
  }
  h2 {
    text-transform: uppercase;
    // line-height:5px;
    margin-top:40px;
    margin-left:50px;
    @media (max-width:428px){
      margin-left:15px;
    }
  }
  p {
    position: relative;
    width: 100%;
    margin-top: 20px;
    white-space: pre-line;
    margin-left:50px;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom:-10px;
    }
    @media (max-width:428px){
      margin-left:15px;
    }
  }
  h5{
    line-height:1px;
    margin-bottom:-10px;
    margin-left:50px;
    @media (max-width:428px){
      margin-left:15px;
    }
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
    padding: 20px;
    font-size: 22px;
    white-space: pre-line;
    margin-top:-10px;
    @media (max-width: 768px) {
      line-height: 1.5;
      margin-top: 310px;
      font-size: 21px;
    }
    @media (max-width: 428px){
      margin-top:0px;
      &:first-child{
        margin-top:30px;
        margin-bottom:-30px;
      }
    }
  }
  button{
    animation: scale 0.3s ease-in-out;
    background-color:transparent;
    border:none;
    // background:transparent
    margin-right:10px;
    margin-top:-20px;
    height:30px;
    width:100px;

    img{
      position:relative;
      height:100%;
      width:100%;
      // animation: glow 0.8s ease-in-out infinite alternate;
      // background-color:transparent;
      animation:all 0.5s ease-in-out;
    }
    @media (max-width: 769px){
      margin-top:20px;
    }
    @keyframes glow {
      from {
        box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #b10808,
          0 0 20px #ac0909, 0 0 25px #dd0808;
      }
      to {
        box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #dd0808,
          0 0 40px #dd0808, 0 0 50px #dd0808;
      }
    }
    @keyframes scale {
      from {
        height:27px;
      }
      to{
        height:30px;
      }
    }
  }
`;
