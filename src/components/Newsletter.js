import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Fade from "react-reveal/Fade";

function Newsletter() {
    const [inviato, setInviato] = useState(false);
    const [email,setEmail] = useState("");
    const saveEmail = async (email) =>{
        const requestOption = {
            method:'POST',
            mode:'cors',
            cache:'no-cache',
            credentials:'same-origin',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email:email})
        }
        const response = await fetch('https://red-fam.herokuapp.com/newsletter/add',requestOption)
        if(response){
            const result = await response.json();
            setInviato(true)
        }else{
            window.alert("si e' verificato un problema " , response.statusText)
        }
    }

    return (
        <Container>
            <Fade bottom>
            <TitleText>
                Iscriviti Alla Newsletter
            </TitleText>
            <FormGroup>
                    <input type="text"name="email-field"placeholder="inserisci la tua email" onChange={(e) => {setEmail(e.target.value)}}pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
                    <button onClick={() => saveEmail(email)}>Iscriviti</button>
                    <div>{inviato === true ? <p style={{width:180,color:"black",backgroundColor:"lightgreen",border:"2px solid green",display:"flex",alignItems:"center",justifyContent:"center"}}>inviato</p>:<p></p>}</div>
            </FormGroup>
            </Fade>
        </Container>
    )
}


export default Newsletter

const Container = styled.div`
    position:relative;
    width:100vw;
    height:80vh;
    background-color:black;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const TitleText = styled.h1`
    position:relative;
    font-family: "Italianno", cursive;
    font-family: "Stick No Bills", sans-serif;
    font-size: 70px;
    color:white;
    margin-bottom:10px;
`
const FormGroup = styled.div`
    position:relative;
    display:flex;
    justify-content:flex-start;
    align-items:start;
    flex-direction:column;
    margin-top:80px;
    form{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:column;

        input{
            margin-bottom:30px;
            height:35px;
            width:400px;
            text-align:center;
            border-radius:20px;
        }
        input[type=submit]{
            width:200px;
            :hover{
                cursor:pointer;
                opacity:80%;
            }
        }
    }
`