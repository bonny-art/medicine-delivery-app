import React from 'react';

import { Navigation } from 'components';

import { HeaderStyled } from './AppBar.styled';

export const AppBar = () => {
  return (
    <HeaderStyled>
      <Navigation />
    </HeaderStyled>
  );
};
