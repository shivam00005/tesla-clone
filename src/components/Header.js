import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
function Header() {
    const [burgerState, burgerStateChange] = useState(false);
    return (
        <>
            <Continer>
                <a>
                    <img src="/images/logo.svg" alt="" />
                </a>
                <Menu>
                    <a href='#'> Model S</a>
                    <a href='#'> Model 3</a>
                    <a href='#'> Model X</a>
                    <a href='#'> Model Y</a>
                </Menu >
                <RightMenu>
                    <a href='#'>Shop</a>
                    <a href='#'>Tesla Account</a>
                    <CustomMenu onClick={() => burgerStateChange(true)} />
                </RightMenu>
                <BurgerNav show={burgerState}>

                    <CloseWraper>
                        <CustomClose onClick={() => burgerStateChange(false)} />
                    </CloseWraper>

                    <li><a href='#'> Model S</a></li>
                    <li><a href='#'> Model 3</a></li>
                    <li><a href='#'> Model X</a></li>
                    <li><a href='#'> Model Y</a></li>
                    <li><a href='#'>Used Inventory</a></li>
                    <li><a href='#'>Trade-In</a></li>
                    <li><a href='#'>CyberTruck</a></li>
                    <li><a href='#'>RoadDuster</a></li>
                </BurgerNav>
            </Continer >

        </>
    )
}

export default Header

const Continer = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
z-index: 1;

`;

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

a{
    font-weight:600;
    text-transform: uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}
@media (max-width:768px){
    display:none;
}
`;

const RightMenu = styled.div`
display:flex;
align-items:center;
cursor:pointer;
a{
    font-weight:600;
    text-transform: uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
    margin-right:10px;
}`;

const CustomMenu = styled(MenuIcon)``;

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
text-align: left;
transform :${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition : transform 0.2s ease;
li{
    padding : 15px 0 ;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
}

`;

const CustomClose = styled(CloseIcon)`
cursor:pointer;`;

const CloseWraper = styled.div`
display:flex;
justify-content:Flex-end;`;