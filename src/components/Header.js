import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  const [BurgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <Logo>
        <Link to = "/">
        <img src="/images/web-rti.jpg" alt="Logo" />
        </Link>
        <BurgerMenu onClick={() => setBurgerStatus(true)}>
          <img src="/images/hamburger-menu3.png" />
        </BurgerMenu>
      </Logo>
      <Menu>
        <SocialContainer>
          <a
            target="blank"
            href="https://open.spotify.com/artist/1XXWmjLKrmLfAaeAnfRYm5"
          >
            <img src="/images/spotify-icona1.png" alt="Logo-spotify" />
          </a>
          <a target="blank" href="https://www.facebook.com/redfamilymusic/">
            <img src="/images/facebook-icona1.png" alt="Logo-facebook" />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/redfamilymusic/?hl=it"
          >
            <img src="/images/instagram-icona1.png" alt="Logo-instagram" />
          </a>
          <a
            target="blank"
            href="https://www.youtube.com/channel/UCF245xSYIkQMAw-k1kJu_Mg"
          >
            <img src="/images/youtube-icona1.png" alt="Logo-youtube" />
          </a>
        </SocialContainer>
        <ButtonGroup>
          <p>
            <a href="/home">Home</a>
          </p>
          <p>
            <Link to={"/video"}>
              Video
            </Link>
          </p>
          <p>
            <a href="/testi">Testi</a>
          </p>
          <p>
            <a href="">Shop</a>
          </p>
        </ButtonGroup>
      </Menu>
      <BurgerNav show={BurgerStatus}>
        <CustomClose onClick={() => setBurgerStatus(false)}>
          <img src="/images/chiudi-pagina2.png" alt="" />
        </CustomClose>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/video">Video</a>
          </li>
          <li>
            <a href="/testi">Testi</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
        </ul>

        <div>
          <a
            target="blank"
            href="https://www.youtube.com/channel/UCF245xSYIkQMAw-k1kJu_Mg"
          >
            <img src="./images/youtube-icona1.png" alt="" />
          </a>
          <a
            target="blank"
            href="https://open.spotify.com/artist/1XXWmjLKrmLfAaeAnfRYm5"
          >
            <img src="./images/spotify-icona1.png" alt="" />
          </a>
          <a target="blank" href="https://www.facebook.com/redfamilymusic/">
            <img src="./images/facebook-icona1.png" alt="" />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/redfamilymusic/?hl=it"
          >
            <img src="./images/instagram-icona1.png" alt="" />
          </a>
        </div>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  z-index: 100;
  height: 150px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: top;
  padding: 0 20px;
  marginn-bottom: 50px;
  top: 0;
  font-size: 25px;
  background-color: black;
  @media (max-width: 768px) {
    padding: 0px;
    height: 85px;
  }
  flex-direction: column;
`;
const Logo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid rgb(130, 132, 132);
  width: 100vw;
  height: 70%;
  // background-image: url("./images/logo-buono.png);
  // background-position:center;
  // background-size:cover;
  img {
    height: 100px;
  }
  @media (max-width: 768px) {
    height: 100%;
    border-bottom: 0px;
    align-items: center;
    transition: 0.3s ease-in;

    img {
      height: 70px;
    }
  }
`;

const Menu = styled.div`
  position: relative;
  height: 30%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 20px;
  margin-top: 5px;
  @media (max-width: 768px) {
    display: none;
    transition: 2s ease-in;
  }
  a {
    margin-right: 15px;
    margin-top: 5px;
    font-size: 20px;
    color: white;
    text-decoration: none;
    :hover {
      color: red;
      text-decoration: none;
    }
  }
`;
const SocialContainer = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  margin-left: 15px;
  margin-bottom: 8px;
  img {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
  a {
    img:hover {
      opacity: 90%;
    }
  }
`;

// const LoginButton = styled.div`
//     position:relative;
//     width:200px;
//     display:flex;

// `
const ButtonGroup = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  margin-right: 300px;
  p:nth-child(4) {
    a {
      text-decoration: line-through;
      text-decoration-color: red;
    }
  }
  p {
    a:hover {
      color: red;
    }
  }
`;

const BurgerMenu = styled.div`
  visibility: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen 
    and (device-width: 428px) 
    and (device-height: 926px) {
      display: flex;
    justify-content: flex-start;
    visibility: visible;
    position: absolute;
    top: 21px;
    right: 8px;
    }
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    visibility: visible;
    position: absolute;
    top: 19.8%;
    right: 4.7%;
  }
  @media (max-width: 375px) {
    top: 23px;
    right: 5px;
  }
  @media (max-width: 425px) {
    top: 25px;
    right: 8px;
  }
  img {
    @media (max-width: 768px) {
      width: 45px;
      height: 45px;
      cursor: pointer;
    }
    @media (max-width: 425px){
        height:35px;
        width:35px;
    }
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(8, 8, 8, 0.999);
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  ul {
    margin-top: 0px;
  }
  li {
    list-style: none;
    padding: 10px;
    margin-right: 18px;
    a {
      color: white;
      font-size: 35px;
      font-family: "Exo 2", sans-serif;
      font-weight: bold;
      text-transform: uppercase;
    }
    a:hover {
      color: red;
      text-decoration: none;
    }
    :first-child {
      margin-top: 100px;
    }
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 400px;
    @media only screen 
    and (device-width: 428px) 
    and (device-height: 926px) {
      margin-top:300px;
    }
    a {
      img:first-child {
        margin-right: 8px;
      }

      img {
        height: 30px;
        width: 30px;
        margin-right: 5px;
        padding: 2px;
      }
    }
  }
`;

const CustomClose = styled.span`
  img {
    color: white;
    position: fixed;
    height: 30px;
    top: 8px;
    left: 7px;
    :hover {
      cursor: pointer;
      opacity: 80%;
    }
  }
`;
