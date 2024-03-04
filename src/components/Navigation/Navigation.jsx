import React from 'react';

import { NavLinkStyled, NavStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavStyled>
      <NavLinkStyled to={'/'}>Shop</NavLinkStyled>
      <NavLinkStyled to={'/cart'}>Shopping Cart</NavLinkStyled>
    </NavStyled>
  );
};
