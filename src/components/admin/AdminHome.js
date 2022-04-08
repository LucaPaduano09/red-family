import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const AdminHome = () => {
  const [sottoscrizioni, setSottoscrizioni] = useState([]);
  const [newsletter, setNewsletter] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const getSottoscrizioni = async () => {
      const response = await fetch(
        "https://red-fam.herokuapp.com/sottoscrizione",
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        window.alert("query non andata a buon fine");
      }
      const result = await response.json();
      setSottoscrizioni(result);
    };
    const getNewsletter = async () => {
        const response = await fetch(
          "https://red-fam.herokuapp.com/newsletter",
          {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          window.alert("query non andata a buon fine");
        }
        const result = await response.json();
        setNewsletter(result);
      };
    getSottoscrizioni();
    getNewsletter();
    console.log(sottoscrizioni)
  }, []);

  const handleSottoscrizioni = () =>{
    history.push("/admin/sottoscrizioni");
  }
  return (
    <ContainerContainers>
      <Container>
        <h1>Area Amministratore</h1>
        <CardContainer>
          <Card onClick={() => handleSottoscrizioni()}>
            <h2>Sottoscrizioni</h2>
            <p>{sottoscrizioni.length}</p>
          </Card>
          <Card>
            <h2>Newsletter</h2>
            <p>{newsletter.length}</p>
          </Card>
        </CardContainer>
      </Container>
    </ContainerContainers>
  );
};

export default AdminHome;

const ContainerContainers = styled.div`
  background: url("../images/sfondo-sito1.png");
  background-position: center center;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 428px){
    height: auto;
  }
`;

const Container = styled.div`
  position: relative;
  // width: 1280px;
  // height: 1200px;
  width: 66.6%;
//   background-image: linear-gradient(to right, #0f0f11ea, transparent);
  display: flex;
  margin: 0 auto;
  margin-top: 155px;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  @media (max-width: 1024px) {
    margin-top: 185px;
    width: 960px;
    height: 1200px;
  }
  @media (max-width: 768px) {
    margin-top: 80px;
  }
  @media (max-width: 428px) {
    margin-top: 80px;
    width: 100vw;
    height: auto;
  }

      h1{
          color:white;
          margin-bottom:50px;
      }
      label{
          font-size:20px;
          font-weight:400;
          color:white;
          margin-top:20px;
        //   text-transform:uppercase;
      }
      input{
          margin-bottom:20px;
      }
}
`;

const CardContainer = styled.div`
  position: relative;
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 428px){
    flex-direction:column;
  }
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  min-height: 200px;
  flex-direction: column;
  border-radius: 20px;
  &:hover {
    box-shadow: 0 18px 36px 0 rgba(0, 0, 0, 6);
  }
  @media screen and (max-width: 428px){
    margin-top: 10px;
  }
`;
