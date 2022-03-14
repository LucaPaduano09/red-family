import React from 'react'
import styled from 'styled-components'

function Finalfooter() {
    return (
        <Container>
            <p>Redfamily © 2022 </p>
            <FooterMenu>
                <SingoloItem>
                    <a style={{color:"white"}}href='mailto:redfamilymusic@gmail.com'>redfamilymusic@gmail.com</a>
                </SingoloItem>
            </FooterMenu>
        </Container>
    )
}

export default Finalfooter

const Container = styled.div`
    position:relative;
    height:80px;
    width:100vw;
    background-color:rgba(3, 3, 3, 0.829);
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    p{
        margin:0px;
    }
`
const FooterMenu = styled.div`
    position:relative;
    display:flex;
    align-items:center;
`
const SingoloItem = styled.div`
    position:relative;
    margin-left:15px;
    p{
        margin:0px;
        margin-left:15px;
        a{
            margin:0px;
            @media(max-width:375){
                font-size:15px;
            }
        }
    }
`