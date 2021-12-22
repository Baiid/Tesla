import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import arrow from "../asets/images/down-arrow.svg"



function Section({title,description,leftBtnText,rightBtnText,backgroundImage }) {
    return (
        <Wrap bgImage = {backgroundImage}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>

            </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                       {leftBtnText}
                    </LeftButton>
                    {rightBtnText &&
                    
                    <RightButton>
                    {rightBtnText}
                     </RightButton>
                    }
                
                
                </ButtonGroup>
                <DownArrow src={arrow}/>
                </Fade>
            </Buttons>
       
        </Wrap>
    )
}

export default Section


const Wrap = styled.div`
z-index:10;
width: 100vw;
height: 100vh;
background-size:cover;
background-position:center ;
background-repeat:no-repeat ;

display: flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props => `url(${props.bgImage})`};


`

const ItemText = styled.div`
padding-top:15vh;
text-align:center;
z-index:10;
`

const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;

@media (max-width: 768px){
    flex-direction:column;
}


`

const LeftButton = styled.div`
background-color: rgba(23,26,31,0.8) ;
height: 40px;
width: 256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor: pointer;
margin: 8px;



`

const RightButton = styled(LeftButton)`
background-color:white ;
opacity: 0.65;
color: black;

`

const DownArrow = styled.img`

width:100%;
background-repeat: no-repeat;
margin-top:20px;
height: 40px;
animation:animateDown infinite 1.5s;



`

const Buttons = styled.div`


`