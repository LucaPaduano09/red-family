import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const AdminSottoscrizioni = () => {
  const [sottoscrizioni, setSottoscrizioni] = useState([]);
  
  const handleDelete = async (id) => {
    const response = await fetch(
      "https://red-fam.herokuapp.com/sottoscrizione/" + id,
      {
        method: "DELETE",
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
    window.alert("ordine cancellato");
  }

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
    getSottoscrizioni();
    console.log(sottoscrizioni);
  }, [sottoscrizioni.length]);
  return (
    <ContainerContainers>
      <Container>
        <h1>Sottoscrizioni</h1>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Prodotto</th>
                <th>Taglia</th>
                <th>Colore</th>
                <th>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {
              sottoscrizioni.length > 0 && sottoscrizioni.map((st) => (
                <tr>
                  <td>{st.email}</td>
                  <td>{st.prodotto}</td>
                  <td>{st.taglia}</td>
                  <td>{st.colore}</td>
                  <td>
                    <button onClick={() => handleDelete(st._id)}>delete</button>
                    <button>
                      <a style={{color:"black"}}href={`mailto:`+st.email+`?subject=`+st.prodotto+`&body=Gentile Cliente ti inviamo questa mail per confermarti che il prodotto: `+st.prodotto +` è disponibile per la vendita.Clicca su questo link per confermare la tua prenotazione!`}>Mail</a>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </ContainerContainers>
  );
};

export default AdminSottoscrizioni;

const ContainerContainers = styled.div`
  background: url("../images/sfondo-sito1.png");
  background-position: center center;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 428px){
    height:auto;
  }
`;

const Container = styled.div`
  position: relative;
  // width: 1280px;
  // height: 1200px;
  width: 100%;
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
    height: 700px;
    align-items: flex-start;
    justify-content:flex-start;
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

const TableContainer = styled.div`
  position: relative;
  width: 100%;

  table {
    position: relative;
    width: 100%;

    thead {
      color: white;
      tr{
          th{
              font-size:30px;
              text-align:center;
              position:relative;
              width:20%;
              height:100px;
              @media screen and (max-width: 428px) {
                font-size:12px;
                width:10%;
              }
          }
      }
    }
    tbody{
        color:white;
        tr{
            height:40px;
            td{
                text-align:center;
                @media screen and (max-width: 428px) {
                  font-size:8px;
                  width:15%;
                }
                button{
                  width:80px;
                  height:40px;
                  margin-left:5px;
                  color:black;
                  @media screen and (max-width: 428px){
                    font-size:8px;
                    width:20px;
                    height:40px;
                  }
                }
            }
        }
    }
  }
`;
