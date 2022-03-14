import React from "react";
import styled from "styled-components";
import Zoom from "react-reveal";
import Newsletter from "./Newsletter";
import Finalfooter from "./Finalfooter";
function Home() {
  return (
    <ContainerContainers>
      <Container>
        <MainVideoContainer>
          <Zoom>
            <div
            style={{
              width:"100%",
              height:"500px"
            }}
            >
              <img style={{position:"realtive",width:"100%",height:"100%"}}src="./images/prova1.jpg"/>  
            </div>
          </Zoom>
        </MainVideoContainer>
        <ItemContainer>
            <SingleItem>
              <img src="./images/redd.png" />
              <h3>T-SHIRT RED-FAMILY ONE</h3>
              <p>29.99€</p>
              <button>Pre-acquista</button>
            </SingleItem>
            <SingleItem>
              <img src="./images/redd.png" />
              <h3>CAPPELLO RED-FAMILY ONE</h3>
              <p>19.99€</p>
              <button>Pre-acquista</button>
            </SingleItem>
        </ItemContainer>
      </Container>
      <Newsletter />
      <Finalfooter />
    </ContainerContainers>
  );
}

export default Home;

const ContainerContainers = styled.div`
  background: url("./images/sfondo-sito1.png");
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
  width:85%;
  background-image: linear-gradient(to right, #0f0f11ea, transparent);
  display: flex;
  margin: 0 auto;
  margin-top: 180px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    margin-top: 185px;
    width: 100vw;
    height: 1200px;
  }
  @media (max-width: 768px) {
    margin-top: 80px;
  }
  @media (max-width: 428px) {
    margin-top: 80px;
    width: 100vw;
    height: 900px;
  }
`;

const MainVideoContainer = styled.div`
  position:relative;
  width:100%;
  height:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  iframe{
    @media (max-width: 428px){
      width:100%;
    }
  }
`
const MoreVideoContainer = styled.div`
  position:relative;
  width:100%;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap:10px;
  margin-top:50px;
  @media (max-width: 769px){
    grid-template-columns: 1fr 1fr 1fr
  }
  @media (max-width: 428px){
    grid-template-columns: 1fr;
    grid-gap:20px;
  }
`
const MoreVideoContainer2 = styled.div`
  position:relative;
  width:100%;
  display:grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap:10px;
  margin-top:25px;
  @media (max-width: 428px){
    grid-template-columns: 2fr
  }
`
const ItemContainer = styled.div`
  position:relative;
  width:100%;
  height:80vh;
  display:flex;
  align-items:center;
  justify-content:center;
  @media (max-width:428px){
    height:50%;
  }

`

const SingleItem = styled.div`
  position:relative;
  width:50%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  transition: all 0.5s ease-in-out; 
  :hover{
    transform: scale(1.2);
    cursor:pointer;
  }
  img{
    position:relative;
    height:300px;
    width:300px;
    @media (max-width:428px){
      height:100px;
      width:100px;
    }
  }
  h3{
    color:white;
    font-size:1vw;
    @media (max-width:428px){
      font-size:3vw;
    }
  }
`