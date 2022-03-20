import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const urlQueryString = window.location.pathname;
const id = urlQueryString.replace("/prodotto/", "");
const Prodotto = () => {
  const [prodotto, setProdotto] = useState([]);
  const [taglia, setTaglia] = useState("");
  const [email, setEmail] = useState("");
  const [inviato, setInviato] = useState(false);

  //funzione che salva l'ordine nel db
  const handleClick = async (email, taglia, prodotto) => {
    if (email !== "" && taglia !== "") {
      const response = await fetch(
        "https://red-fam.herokuapp.com/sottoscrizione/add",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          body: JSON.stringify({
            email: email,
            taglia: taglia,
            prodotto: prodotto.prodotti_name,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        window.alert("pre-ordine non andato a buon fine");
      }

      const result = await response.json();
      setInviato(true);
    }
    if (email !== "" && taglia === "") {
      window.alert("seleziona una taglia");
    }
  };
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        "https://red-family-shop.herokuapp.com/prodotti/" + id,
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
        window.alert("query sul db non riuscita");
      }
      const result = await response.json();
      console.log(prodotto);
      setProdotto(result);
    };

    getProduct();
  }, [prodotto.length]);
  return (
    <Container>
      <ProdottoContainer>
        <img src={"." + prodotto.prodotti_image} />
      </ProdottoContainer>
      <FormContainer>
        <h1>{prodotto.prodotti_name}</h1>
        <h2>{prodotto.prodotti_desc}</h2>
        <h3>{prodotto.prodotti_price + "€"}</h3>
        <InputContainer>
          <select
            name="taglie"
            id="taglie"
            onChange={(e) => setTaglia(e.target.value)}
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <input
            type="text"
            placeholder="inserisci la tua mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
          <button onClick={() => handleClick(email, taglia, prodotto)}>
          <img src="../images/preordina-button.png"/>
          </button>
          {inviato === true ? <p>Pre ordine salvato !</p> : <p></p>}
      </FormContainer>
    </Container>
  );
};

export default Prodotto;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 100px);
  margin-top: 100px;
  width: 100vw;
  background-image: url("../images/sfondo-sito1.png");
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProdottoContainer = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: relative;
    height: 400px;
    width: 400px;
  }
`;
const FormContainer = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-image: linear-gradient(to right, #0f0f11ea, transparent);
  padding: 20px;

  h1 {
    margin-top: 100px;
  }
  h1,
  h2,
  h3 {
    text-transform: uppercase;
    position: relative;
    width: 50%;
    color: white;
  }
  button {
      background-color:transparent;
      border:none;

        img{
            height:120px;
            width:120px;
            transition: all 0.3s ease-in-out;
            &:hover{
                transform:scale(1.1);
            }
        }
    }
`;

const InputContainer = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  width:40vw;
  justify-content: center;

  select {
      margin-right:10px;
  }
`