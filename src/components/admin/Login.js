import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
require('dotenv').config({ path: "config.env" });

const Login = () => {

    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const user = process.env.USERNAME || "admin";
    const pwd = process.env.PASSWORD || "redfamilymusicadmin"
    const history = useHistory()
    const handleClick = (username, password) => {
        console.log(username, password)
        if(username === user && password === pwd)
        {
            history.push("/admin/home");
        }else{
            window.alert("credenziali di accesso non valide");
            console.log(user + " | " + process.env.PASSWORD)
        }
    }

  return (
    <ContainerContainers>
        <Container>
            {/* <form> */}
                <h1>Entra nell'area amministratore</h1>
                <label for="username">Nome utente</label>
                <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                <label for="password" placeholder='password'>Password</label>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" onClick={() => handleClick(username, password)}/>
            {/* </form> */}
        </Container>
    </ContainerContainers>
  )
}

export default Login

const ContainerContainers = styled.div`
  background: url("../images/sfondo-sito1.png");
  background-position: center center;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height:100vh;
  @media screen and (max-width: 428px){
    height:auto;
  }
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
    align-items:flex-start;
    justify-content:flex-start;
  }
  @media (max-width: 428px) {
    margin-top: 80px;
    width: 100vw;
    height: 700px;
  }

      h1{
          color:white;
          @media screen and (max-width:428px){
            margin-left:30px;
          }
      }
      label{
          font-size:20px;
          font-weight:400;
          color:white;
          margin-top:20px;
        //   text-transform:uppercase;
        @media screen and (max-width:428px){
          margin-left:30px;
        }
      }
      input{
          margin-bottom:20px;
          @media screen and (max-width:428px){
            margin-left:30px;
          }
      }
}
`;