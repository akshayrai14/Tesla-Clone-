import React, { useState } from 'react'
import Home from './Home'
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
// import { Container } from '@mui/system';
const Header = () => {
  const[show,setshow]=useState(false);
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt=""/>
      </a>
      <Menu>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Model S</a>
      </Menu>
      <RightMenu>
      <a href="#">Shop</a>
      <a href="#">Tesla Account</a>
      <CustomMenu onClick={()=>setshow(true)}></CustomMenu>
      </RightMenu>
      {show && <BurgerNav className="hamnav">
        <CustomWrapper>
          <CustomClose onClick={()=>setshow(false)}/>
        </CustomWrapper>
        <li><a href="#" >Existing Inventory</a></li>
        <li><a href="#" >Used Inventory</a></li>
        <li><a href="#" >Cybertruck</a></li>
        <li><a href="#" >Roadster</a></li>
      </BurgerNav>
      }
    </Container>
  )
}
export default Header
const Container =styled.div`
font-size: 20px;
position: fixed;
top: 0;
left: 0;
right: 0;
min-height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
z-index: 1;
`
const Menu=styled.div`
display: flex;
align-items: center;
justify-content:center;
flex:1;

a{
  font-weight : 600;
  text-decoration : uppercase;
  padding :0 10px;
  flex-wrap : no-wrap;
}
@media(max-width:760px){
  display:none;
}
`
const RightMenu=styled.div`
display: flex;
align-items:center;
a{
  font-weight:600;
  text-decoration:uppercase;
  padding: 0 10px;
}
`
const CustomMenu = styled(DensitySmallIcon)`
cursor:pointer;
`
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0,0.2);
}
a{
  font-weight:600;
}
`
const CustomClose=styled(ClearIcon)`

`
const CustomWrapper=styled.div`
display:flex;
justify-content:flex-end;
`
