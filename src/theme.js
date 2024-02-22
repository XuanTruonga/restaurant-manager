import { createTheme } from '@mui/material';


export const theme = createTheme({
  palette: {
    primary: {
      main: '#0066CC',
      light: '#99CCFF',
      dark: '#0050B3',
      contrastText: '#fff'
    },
    secondary: {
      main: '#1D863B',
      light: '#94DCA9',
      dark: '#125425',
      contrastText: '#ccc'
    }
  },


  restaurants: {
    appBarHeight:'56px'
  }
});
