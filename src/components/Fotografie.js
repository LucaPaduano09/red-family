import React from 'react'
import styled from 'styled-components'
import Finalfooter from './Finalfooter'

function Fotografie(props) {
    return (
        <FullContainer>

            <Container>
                <TitleWrapper>
                    <h2>FOTOGRAFIE</h2>
                </TitleWrapper>
                <div class="container">
                    <FlexContainer>
    
                    <div class="row">
                        <div class="col-xs-6 col-md-3"><img src="./images/red.JPG"alt=""/><div class="testoFotoDiv">{props.testi[0]}</div></div>
                        <div class="col-xs-6 col-md-3"><img src="./images/red1.JPG"alt="" /><div class="testoFotoDiv">{props.testi[1]}</div></div>
                        <div class="col-xs-6 col-md-3"><img src="./images/red3.jpg"alt="" /></div>
                        <div class="col-xs-6 col-md-3"><img src="./images/capiam2.png"alt="" /></div>
                        <div class="col-xs-6 col-md-3"><img src="./images/red.JPG"alt="" /></div>
                        <div class="col-xs-6 col-md-3"><img src="./images/red1.JPG"alt="" /></div>
                        <div class="col-xs-6 col-md-3"><img src="./images/red3.jpg"alt="" /></div>
                        <div class="col-xs-6 col-md-3"><img src="./images/capiam2.png"alt="" /></div>
                        <div class="col-xs-6 col-md-3"><img src="./images/red.JPG"alt="" /></div>
                        <div class="col-xs-6 col-md-3"><img src="./images/red1.JPG"alt="" /></div>
                        <div class="col-xs-6 col-md-3"><img src="./images/red3.jpg"alt="" /></div>
                        <div class="col-xs-6 col-md-3"><img src="./images/capiam2.png"alt="" /></div>
                    </div>
                    </FlexContainer>
                </div>
                
                
                
                {/* <FotoRow>
                    <img src="./images/red.JPG"alt="" />
                    <img src="./images/red.JPG"alt="" />
                </FotoRow>
                <FotoRow>
                    <img src="./images/red.JPG"alt="" />
                    <img src="./images/red.JPG"alt="" />
                </FotoRow> */}
    
    
            </Container>
            <Finalfooter />
        </FullContainer>
    )
}

export default Fotografie

const FullContainer = styled.div`

`

const Container = styled.div`
    width:66.3vw;
    margin: 0 auto;
    height:1000px;
    margin-top:180px;
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    img{
        position:relative;
        height:300px;
        width:100%;
        :hover{
            opacity:80%;
            cursor:pointer;
        }
        @media(max-width:768px){
            height:231.5px;
            width:231.5px;
            
        }
    }
    .container{
        padding:0px;
        margin:0px;
        position:relative;
        width:100%;
        margin-top:0px;
    }
    .row{
        position:relative;
        width:100%;
        padding:0px;
        margin-left:0px;
    }
    div{
        margin:0px;
        padding:0px;
        // margin-right:55px;
        .testoFotoDiv{
            visibility:hidden;
            position:absolute;
            top:0;
            left:0;
            height:100%;
            width:100%;
            background-color:red;
        }
    }
`
const TitleWrapper = styled.div `
    position: relative;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100%;
    background-color: chartreuse;
    border-bottom: 3px solid rgb(168, 11, 11);
    border-top: 3px solid rgb(168, 11, 11);
    color: white;
    text-align: center;
    height: 70px;
    background-image: linear-gradient(to right,#0f0f11,#1f1f22);
    overflow-y:hidden;
    margin-top:95px;
    @media(max-width:768px){
        height:70px;
        margin-top:0px;
    }

    h2{
        height:100%;
        width:100%;
        font-size:24px;
        text-shadow: 0 0 #0a0a0a, 1px 1px #0a0a0a, 2px 2px #0a0a0a, 3px 3px #0a0a0a, 4px 4px #0a0a0a, 5px 5px #0a0a0a, 6px 6px #0a0a0a, 7px 7px #0a0a0a, 8px 8px #0a0a0a, 9px 9px #0a0a0a, 10px 10px #0a0a0a, 11px 11px #0a0a0a, 12px 12px #0a0a0a, 13px 13px #0a0a0a, 14px 14px #0a0a0a, 15px 15px #0a0a0a, 16px 16px #0a0a0a, 17px 17px #0a0a0a, 18px 18px #0a0a0a, 19px 19px #0a0a0a, 20px 20px #0a0a0a, 21px 21px #0a0a0a, 22px 22px #0a0a0a, 23px 23px #0a0a0a, 24px 24px #0a0a0a, 25px 25px #0a0a0a, 26px 26px #0a0a0a, 27px 27px #0a0a0a, 28px 28px #0a0a0a, 29px 29px #0a0a0a, 30px 30px #0a0a0a, 31px 31px #0a0a0a, 32px 32px #0a0a0a, 33px 33px #0a0a0a, 34px 34px #0a0a0a, 35px 35px #0a0a0a, 36px 36px #0a0a0a, 37px 37px #0a0a0a, 38px 38px #0a0a0a, 39px 39px #0a0a0a, 40px 40px #0a0a0a, 41px 41px #0a0a0a, 42px 42px #0a0a0a, 43px 43px #0a0a0a, 44px 44px #0a0a0a, 45px 45px #0a0a0a, 46px 46px #0a0a0a, 47px 47px #0a0a0a, 48px 48px #0a0a0a, 49px 49px #0a0a0a, 50px 50px #0a0a0a, 51px 51px #0a0a0a, 52px 52px #0a0a0a, 53px 53px #0a0a0a, 54px 54px #0a0a0a, 55px 55px #0a0a0a, 56px 56px #0a0a0a, 57px 57px #0a0a0a, 58px 58px #0a0a0a, 59px 59px #0a0a0a, 60px 60px #0a0a0a, 61px 61px #0a0a0a, 62px 62px #0a0a0a, 63px 63px #0a0a0a, 64px 64px #0a0a0a, 65px 65px #0a0a0a, 66px 66px #0a0a0a, 67px 67px #0a0a0a, 68px 68px #0a0a0a, 69px 69px #0a0a0a, 70px 70px #0a0a0a, 71px 71px #0a0a0a, 72px 72px #0a0a0a, 73px 73px #0a0a0a, 74px 74px #0a0a0a, 75px 75px #0a0a0a, 76px 76px #0a0a0a, 77px 77px #0a0a0a, 78px 78px #0a0a0a, 79px 79px #0a0a0a, 80px 80px #0a0a0a, 81px 81px #0a0a0a, 82px 82px #0a0a0a, 83px 83px #0a0a0a, 84px 84px #0a0a0a, 85px 85px #0a0a0a, 86px 86px #0a0a0a, 87px 87px #0a0a0a, 88px 88px #0a0a0a, 89px 89px #0a0a0a, 90px 90px #0a0a0a, 91px 91px #0a0a0a, 92px 92px #0a0a0a, 93px 93px #0a0a0a, 94px 94px #0a0a0a, 95px 95px #0a0a0a, 96px 96px #0a0a0a, 97px 97px #0a0a0a, 98px 98px #0a0a0a, 99px 99px #0a0a0a, 100px 100px #0a0a0a, 101px 101px #0a0a0a, 102px 102px #0a0a0a, 103px 103px #0a0a0a, 104px 104px #0a0a0a, 105px 105px #0a0a0a, 106px 106px #0a0a0a, 107px 107px #0a0a0a, 108px 108px #0a0a0a, 109px 109px #0a0a0a, 110px 110px #0a0a0a, 111px 111px #0a0a0a, 112px 112px #0a0a0a, 113px 113px #0a0a0a, 114px 114px #0a0a0a, 115px 115px #0a0a0a, 116px 116px #0a0a0a, 117px 117px #0a0a0a, 118px 118px #0a0a0a, 119px 119px #0a0a0a, 120px 120px #0a0a0a, 121px 121px #0a0a0a, 122px 122px #0a0a0a, 123px 123px #0a0a0a, 124px 124px #0a0a0a, 125px 125px #0a0a0a, 126px 126px #0a0a0a, 127px 127px #0a0a0a, 128px 128px #0a0a0a, 129px 129px #0a0a0a, 130px 130px #0a0a0a, 131px 131px #0a0a0a, 132px 132px #0a0a0a, 133px 133px #0a0a0a, 134px 134px #0a0a0a, 135px 135px #0a0a0a, 136px 136px #0a0a0a, 137px 137px #0a0a0a, 138px 138px #0a0a0a, 139px 139px #0a0a0a, 140px 140px #0a0a0a, 141px 141px #0a0a0a, 142px 142px #0a0a0a, 143px 143px #0a0a0a, 144px 144px #0a0a0a, 145px 145px #0a0a0a, 146px 146px #0a0a0a, 147px 147px #0a0a0a, 148px 148px #0a0a0a, 149px 149px #0a0a0a, 150px 150px #0a0a0a, 151px 151px #0a0a0a, 152px 152px #0a0a0a, 153px 153px #0a0a0a, 154px 154px #0a0a0a, 155px 155px #0a0a0a, 156px 156px #0a0a0a, 157px 157px #0a0a0a, 158px 158px #0a0a0a, 159px 159px #0a0a0a, 160px 160px #0a0a0a, 161px 161px #0a0a0a, 162px 162px #0a0a0a, 163px 163px #0a0a0a, 164px 164px #0a0a0a, 165px 165px #0a0a0a, 166px 166px #0a0a0a, 167px 167px #0a0a0a, 168px 168px #0a0a0a, 169px 169px #0a0a0a, 170px 170px #0a0a0a, 171px 171px #0a0a0a, 172px 172px #0a0a0a, 173px 173px #0a0a0a, 174px 174px #0a0a0a, 175px 175px #0a0a0a, 176px 176px #0a0a0a, 177px 177px #0a0a0a, 178px 178px #0a0a0a, 179px 179px #0a0a0a, 180px 180px #0a0a0a, 181px 181px #0a0a0a, 182px 182px #0a0a0a, 183px 183px #0a0a0a, 184px 184px #0a0a0a, 185px 185px #0a0a0a, 186px 186px #0a0a0a, 187px 187px #0a0a0a, 188px 188px #0a0a0a, 189px 189px #0a0a0a, 190px 190px #0a0a0a, 191px 191px #0a0a0a, 192px 192px #0a0a0a, 193px 193px #0a0a0a, 194px 194px #0a0a0a, 195px 195px #0a0a0a, 196px 196px #0a0a0a, 197px 197px #0a0a0a, 198px 198px #0a0a0a, 199px 199px #0a0a0a, 200px 200px #0a0a0a;
        display: flex;
        justify-content:center;
        align-items: center;
        overflow-y: visible;
        overflow-x:auto;
        letter-spacing: 3px;
        font-family: 'Exo 2', sans-serif;
        @media(max-width:768px){
            font-size: 18px;
            letter-spacing:2px;
        }
    }
`
const FlexContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    align-content:center;
    
`