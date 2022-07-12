import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
    background-color:black;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    p{
        margin:0px;
        @media screen and (max-width: 428px){
            font-size:10px;
        }
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
    display:flex;
    align-items:center;
    justify-content:center;
        a{
            margin:0px;
            @media(max-width: 428px){
                font-size:10px;
            }   
        }
`