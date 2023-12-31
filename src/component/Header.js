import React, { useState } from 'react';
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model Y</a>
        <a href="#">Model X</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={ burgerStatus }>
        <CustomCloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)} />
        </CustomCloseWrapper>
        <li><a>Model S</a></li>
        <li><a>Model 3</a></li>
        <li><a>Model X</a></li>
        <li><a>Model Y</a></li>
        <li><a>Existing Inventory</a></li>
        <li><a>Used Inventory</a></li>
        <li><a>Trade In</a></li>
        <li><a>Cybertruck</a></li>
        <li><a>Roadster</a></li>
      </BurgerNav>

    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 10;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
      font-weight: 600;
      text-transform: uppercase;
      margin: 10px;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  text-align: start;
  transition: transform 0.3s;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);

    a {
      font-weight: 600;
    }
  }
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CustomCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
