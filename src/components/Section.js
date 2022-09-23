import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
var bgurl;
function Section(props){
    console.log(props);
    var url=`/images/${props.backgroundImg}`;
    console.log(url);
    return (
        <Fade bottom>
            <Wrap className="Fullbg" style={{backgroundImage:`url(${url})`}}>
                <Fade bottom>
                    <ItemText>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                    </ItemText>
                </Fade>
                <Fade bottom>
                    <Buttons>
                        <ButtonGroup>
                            <LeftButton>
                                {props.leftBtnText}
                            </LeftButton>
                            {props.rightBtntext &&
                            <RightButton className="rightbtn">
                                {props.rightBtntext}
                            </RightButton>
                            }
                        </ButtonGroup>
                        <DownArrow src="/images/down-arrow.svg">
                        </DownArrow>
                    </Buttons>
                </Fade>
            </Wrap>
        </Fade>
    )
}
console.log(bgurl);
export default Section
const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup =styled.div`
display:flex;
@media(max-width : 768px){
    flex-direction:column;
}
`
const LeftButton =styled.div`
background-color: rgba(23,26,32,0.8);
width: 30vw;
height: 46px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 1vh;
transition: transform 0.5s;
:hover{
    opacity:0.9;
    transform: scale(1.05);
}
`
const RightButton=styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`
const DownArrow=styled.img`
margin-top: 20px;
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s
`
const Buttons=styled.div``