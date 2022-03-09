import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <video
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        playsinline
        poster="./images"
      >
        <source src="./images/red-trailer.mp4" type="video/mp4" />
      </video>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  margin-top: 40px;
  video {
    height: 100%;
    width: 70%;
    object-fit: cover;
    margin: 0 auto;
  }
`;
