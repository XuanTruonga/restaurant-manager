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
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small'
      },
      styleOverrides: {
        root: {
          borderWidth: '1px !important',
          outline: '1px !important',
          '&.MuiInputBase-input': {
            fontSize: '15px'
          },
          '.MuiInputLabel-root': {
            fontSize: '15px',
            marginLeft: '5px'
          },
          '.MuiInputBase-input': {
            fontSize: '15px'
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.MuiMenuItem-root': { fontSize: '15px' }
        }
      }
    }
  }
});
