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
    if (requestOption.body != "" ) {
      console.log(requestOption.body,requestOption.body.length)
      const response = await fetch(
        "https://red-fam.herokuapp.com/newsletter/add",
        requestOption)
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
            <button onClick={() => saveEmail(email)}>Iscriviti</button>
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
  @media (max-width: 428px){
      font-size:10vw;
      margin-left:0px;
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
      margin-bottom: 30px;
      height: 35px;
      width: 400px;
      text-align: center;
      border-radius: 20px;
      @media (max-width: 376px){
          width:300px;
      }
    }
    button {
      animation: glow 1.5s ease-in-out infinite alternate;
      background-color:rgb(255,34,38);
      border:2px solid white;
      color:white;
      width: 200px;
      :hover {
        cursor: pointer;
        opacity: 80%;
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
  }
`;
