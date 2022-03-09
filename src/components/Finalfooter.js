import React from 'react'
import styled from 'styled-components'

function Finalfooter() {
    return (
        <Container>
            <p>Redfamily © 2022 </p>
            <FooterMenu>
                <SingoloItem>
                    <p><a href="">Contattaci</a></p>
                </SingoloItem>
                
                <SingoloItem>
                    <p><a href="">Lavora con noi</a></p>
                </SingoloItem>

                <SingoloItem>
                    <p><a href="">Focess</a></p>
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
    margin:30px;
    display:flex;
    align-items:center;
`
const SingoloItem = styled.div`
    position:relative;
    margin-right:30px;
    p{
        margin:0px;
        a{
            margin:0px;
            @media(max-width:375){
                font-size:15px;
            }
        }
    }
`