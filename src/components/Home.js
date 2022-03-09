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
            <iframe
              width="100%"
              height="350px"
              src="//www.youtube.com/embed/2q6PsjEPYic"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowfullscreen="allowFullScreen"
            ></iframe>
          </Zoom>
        </MainVideoContainer>
        <MoreVideoContainer>
        <Zoom>
            <iframe
              width="100%"
              height="200px"
              src="//www.youtube.com/embed/2q6PsjEPYic"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowfullscreen="allowFullScreen"
            ></iframe>
          </Zoom>
          <Zoom>
            <iframe
              width="100%"
              height="200px"
              src="//www.youtube.com/embed/2q6PsjEPYic"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowfullscreen="allowFullScreen"
            ></iframe>
          </Zoom>
          <Zoom>
            <iframe
              width="100%"
              height="200px"
              src="//www.youtube.com/embed/2q6PsjEPYic"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowfullscreen="allowFullScreen"
            ></iframe>
          </Zoom>
        </MoreVideoContainer>
        <MoreVideoContainer2>
        <Zoom>
            <iframe
              width="100%"
              height="400px"
              src="//www.youtube.com/embed/2q6PsjEPYic"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowfullscreen="allowFullScreen"
            ></iframe>
          </Zoom>
          <VerticalVideosContainer>
          <Zoom>
            <iframe
              width="100%"
              height="195px"
              src="//www.youtube.com/embed/2q6PsjEPYic"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowfullscreen="allowFullScreen"
            ></iframe>
          </Zoom>
          <Zoom>
            <iframe
              width="100%"
              height="198px"
              src="//www.youtube.com/embed/2q6PsjEPYic"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowfullscreen="allowFullScreen"
            ></iframe>
          </Zoom>
          </VerticalVideosContainer>
        </MoreVideoContainer2>
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
  width: 1280px;
  height: 1200px;
  background-image: linear-gradient(to right, #0f0f11ea, transparent);
  display: flex;
  margin: 0 auto;
  margin-top: 200px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    margin-top: 185px;
    width: 100vw;
    height: 3500px;
  }
  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;

const MainVideoContainer = styled.div`
  position:relative;
  width:100%;
`
const MoreVideoContainer = styled.div`
  position:relative;
  width:100%;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap:10px;
  margin-top:50px;
`
const MoreVideoContainer2 = styled.div`
  position:relative;
  width:100%;
  display:grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap:10px;
  margin-top:25px;
`
const VerticalVideosContainer = styled.div`

`