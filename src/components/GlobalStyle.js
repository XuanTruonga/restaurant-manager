import { GlobalStyles } from '@mui/material';
import React from 'react';

const GlobalStyle = ({ children }) => {
  return (
    <GlobalStyles styles={{ a: { textDecoration: 'none' }}}>{children}</GlobalStyles>
  );
};

export default GlobalStyle;
