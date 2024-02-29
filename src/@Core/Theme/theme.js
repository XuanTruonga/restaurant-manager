import palette from '@Core/Theme/palette';
import typography from '@Core/Theme/typography';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: palette,
  restaurants: {
    appBarHeight: '56px',
    boxMenuHeight: '596px'
  },
  typography: typography,
  components: {
    MuiTypography:{
      styleOverrides:{
        root:{
          fontSize:'inherit'
        }
      }
    }
    ,
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small'
      },
      styleOverrides: {
        root: {
          borderWidth: '1px !important',
          outline: '1px !important',
          '.MuiInputLabel-root': {
            fontSize: '15px'
          },
          '.MuiOutlinedInput-root': { fontSize: '15px' },
          '.MuiInputBase-input': {
            fontSize: '15px'
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&.MuiInputBase-root': { fontSize: '15px' }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.MuiMenuItem-root': { fontSize: '15px' }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: { '.MuiMenu-list': { maxHeight: '288px' } }
      }
    }
  }
});
