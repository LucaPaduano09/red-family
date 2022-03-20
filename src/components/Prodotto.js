import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const urlQueryString = window.location.pathname;
const id = urlQueryString.replace("/prodotto/", "");
const Prodotto = () => {
  const [prodotto, setProdotto] = useState([{}]);
  const [taglia, setTaglia] = useState("");
  const [email, setEmail] = useState("");
  const [inviato, setInviato] = useState(false);

  //Variabili relative alle immagini prodotto
  const [immagini, setImmagini] = useState([]);
  const [immaginiWhite, setImmaginiWhite] = useState([]);
  const [black, setBlack] = useState(true);
  const [index, setIndex] = useState(0);

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
  
  //funzioni che riempiono array immagini-bianche
  const fillWhite = () =>{
    immaginiWhite.push(immagini[2]);
    immaginiWhite.push(immagini[3]);
  }
  const handleWhiteClick = () =>{
    fillWhite();
    setBlack(false);
  }

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
      // console.log(prodotto);
      setImmagini(result.prodotti_image);
      setProdotto(result);
      console.log(immaginiWhite)
    };

    getProduct();
    console.log(immagini[2])
  }, [prodotto.length]);
  // console.log(immaginiWhite);
  return (
    <Container>
      <ProdottoContainer>
        <FotoContainer>
          {
            black === true ? (
              <div>
                <img src={"." + immagini[0]} onClick={() => setIndex(0)}/>
                <img src={"." + immagini[1]} onClick={() => setIndex(1)}/>
              </div>
            ) : (
              <div>
                <img src={"." + immagini[2]} onClick={() => setIndex(0)}/>
                <img src={"." + immagini[3]} onClick={() => setIndex(1)}/>
              </div>
            )
          }
        </FotoContainer>
          {
            black === true ? (
              <img src={"." + immagini[index]}/>
            ) : (
              <img src={"." + immaginiWhite[index]}/>
            )
          }
        <ColorsContainer>
          <div onClick={() => setBlack(true)}></div>
          <div onClick={() => handleWhiteClick()}></div>
        </ColorsContainer>
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
          <button onClick={() => handleClick(email, taglia, prodotto)}>
          <img src="../images/preordina-button.png"/>
          </button>
        </InputContainer>
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
  overflow:hidden;
`;

const ProdottoContainer = styled.div`
  position: relative;
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    position: relative;
    height: 400px;
    width: 400px;
    margin-left:100px;
  }
`;

const FotoContainer = styled.div`
  position: absolute;
  top:20%;
  left:20px;
  background-color:none;
  height:300px;
  width:100px;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  flex-direction:column;
  margin-right:0px;
  div{
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:column;
    img{
      height:90px;
      width:90px;
      margin-bottom:10px;
      margin-left:0px;
      opacity:70%;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover{
        transform:scale(1.1);
        opacity:100%;
      }
    }
  }
`
const ColorsContainer = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  width:100%;
  div{
    position:relative;
    height:30px;
    width:30px;
    cursor:pointer;
    border-radius:50%;
    &:first-child{
      background-color:black;
      border:1px solid white;
      margin-right:20px;
      margin-left:90px;
    }
    &:nth-child(2){
      background-color:white;
      border:1px solid black;
    }
  }
`

const FormContainer = styled.div`
  position: relative;
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(to right, #0f0f11ea, transparent);
  padding: 20px;

  h1 {
    margin-top: 100px;
  }
  h2{
    font-size:13px;
    line-height:45px;
  }
  h1,
  h2,
  h3 {
    text-transform: uppercase;
    position: relative;
    width: 80%;
    color: white;
    margin-bottom:20px;
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
  input{
    margin-right:20px;
  }
`