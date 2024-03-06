import { GlobalStyles } from '@mui/material';
import React from 'react';


const GlobalStyle = ({ children }) => {
  return <GlobalStyles styles={{ a: { textDecoration: 'none' }, body: {'::-webkit-scrollbar':{ width: '8px',
    height: '8px'}}}}>{children}</GlobalStyles>;
};

export default GlobalStyle;

