import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ tittle, description, backgroundImage, leftButtonText, rightButtonText }) {
    return (<>
        <Wrap bgImage={backgroundImage}>
            <Fade bottom>
                <ItemText>
                    <h1>{tittle}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

            <Button>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftButtonText}
                        </LeftButton>
                        {rightButtonText &&
                            <RightButton>
                                {rightButtonText}
                            </RightButton>
                        }

                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Button>


        </Wrap>
    </>
    )
}

export default Section

const Wrap = styled.div`
z-index:10;
width : 100%;
height : 100vh;
background-size: cover;
background-position:center;
background-image : ${props => `url("/images/${props.bgImage}")`};
display:flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
`;

const ItemText = styled.div`
padding-top : 15vh;
text-align: center;
`;
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;

@media (max-width:768px){
    flex-direction:column;
}

`;
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height:40px;
width:256px;
color:white;
display:flex;
flex-direction: column;
justify-content:center;
align-item:center;
border-radius: 100px;
text-transform:uppercase;
opacity:0.8;
cursor:pointer;
margin:8px;

`;
const RightButton = styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;`;

const DownArrow = styled.img`
margin-top:20px;
height:40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
`;

const Button = styled.div``;
