import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Newsletter() {
  const [inviato, setInviato] = useState(false);
  const [email, setEmail] = useState("");
  const saveEmail = async (email) => {
    const requestOption = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    };
    if (requestOption.body != "") {
      console.log(requestOption.body, requestOption.body.length);
      const response = await fetch(
        "https://red-fam.herokuapp.com/newsletter/add",
        requestOption
      );
      let result = await response.json();
      setInviato(true);
    }
  };

  return (
    <Container>
      <Fade bottom>
        <TitleText>Iscriviti Alla Newsletter</TitleText>
        <FormGroup>
          <form>
            <div>
              <input
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                type="email"
                name="email-field"
                placeholder="inserisci la tua email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <button onClick={() => saveEmail(email)}>
              <img src="./images/iscriviti-button.png" />
            </button>
          </form>
        </FormGroup>
      </Fade>
    </Container>
  );
}

export default Newsletter;

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
  width: 100vw;
  height: 60vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleText = styled.h1`
  position: relative;
  font-family: "Italianno", cursive;
  font-family: "Stick No Bills", sans-serif;
  font-size: 70px;
  color: white;
  margin-bottom: 10px;
  @media (max-width: 428px) {
    font-size: 10vw;
    margin-left: 0px;
  }
`;
const FormGroup = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      position:absolute;
      height: 95%;
      width:98%;
      left:4.5px;
      background-color:black;
      text-align: center;
      border-radius: 20px;
      border:none;
      @media (max-width: 428px){
          left: 2.5px;
      }
    }
    button {
      // animation: glow 1.5s ease-in-out infinite alternate;
      background-color:transparent;
      border:none;
      color:white;
      width: 120px;
      height:120px;
      :hover {
        cursor: pointer;
        opacity: 80%;
      }
      img{
        position:relative;
        width:100%;
        height:100%;
      }
    }
    div{
      position:relative;
      height: 35px;
      width: 400px;
      display:flex;
      align-items:center;
      jusitfy-content:center;
      border-radius:20px;
      background: rgb(232,244,240);
      background: linear-gradient(90deg, rgba(232,244,240,1) 24%, rgba(255,46,0,1) 44%, rgba(223,6,18,1) 62%);
      @media (max-width: 376px){
        width: 300px;
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
  }
`;
