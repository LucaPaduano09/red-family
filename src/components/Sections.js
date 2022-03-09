import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Sections(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
        <Fade bottom>
      <ItemText>
          <h1>{props.title}</h1>
          <p> {props.description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{props.leftBtnText}</LeftButton>
          <RightButton>{props.rightBtnText}</RightButton>
        </ButtonGroup>
        <DownArrow src="images/down-arrow.svg" />
      </Buttons>
        </Fade>
    </Wrap>
  );
}

export default Sections;

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-image: ${(props) => `url('images/${props.bgImage}');`}
    background-position: center;
    background-size:cover;
    background-repeat:no-repeat;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  color: black;
  p {
    color: white;
    font-family: "Italianno", cursive;
    font-family: "Stick No Bills", sans-serif;
    font-size: 40px;
  }
  h1 {
    color: rgba(255, 0, 0);
    margin-bottom: -15px;
    margin-top: -20px;
    font-family: "Italianno", cursive;
    font-family: "Stick No Bills", sans-serif;
    font-size: 80px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.9);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  :hover {
    opacity: 100%;
    background-image:url('./images/spotify-bg.png');
    background-size:cover;
    background-position:center;
    background-repeat:norepeat;
    font-size:0px;
  }
`;

const RightButton = styled(LeftButton)`
  color: black;
  background: white;
  opacity: 0.65;
  :hover {
    opacity: 100%;
    background-image:url('./images/youtube1.jpg');
  }
`;
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  color:red;
`;
const Buttons = styled.div``;
