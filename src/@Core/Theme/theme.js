import palette from '@Core/Theme/palette';
import typography from '@Core/Theme/typography';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: palette,
  restaurants: {
    appBarHeight: '56px',
    boxMenuHeight: '616px',
    heightTable: '530px',
    widthTitleInputControl: '22%'
  },
  typography: typography,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 'inherit'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          width: 6,
          height: 6
        },
        '&::-webkit-scrollbar-track': {
          padding: 6
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: 4,
          backgroundColor: '#c1c1c1'
        },
        '&::-webkit-scrollbar-thumb:hover': {}
      }
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiSelect-select': {
            '&:focus': { backgroundColor: '#fff' }
          },
          fontSize: 'inherit'
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.MuiContainer-maxWidthLg': {
            maxWidth: '1280px'
          }
        }
      }
    },
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
          '&.MuiInputBase-root': { fontSize: 'inherit' }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          // '&.MuiMenuItem-root': { fontSize: 'inherit' }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: { '.MuiMenu-list': { maxHeight: '288px' } }
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          '& .MuiTablePagination-selectLabel': { fontSize: 'inherit' },
          '& .MuiTablePagination-displayedRows': { fontSize: 'inherit' }
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          height: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => {
          if (ownerState.color === 'secondary') {
            return {
              backgroundColor: '#898c8d',
              textTransform: 'none',
              color: '#fff',
              fontWeight: 'bold',
              padding: '5px 15px',
              '&:hover': { backgroundColor: '#686c6d' }
            };
          } else if (ownerState.color === 'primary') {
            return {
              backgroundColor: '#49a14b',
              textTransform: 'none',
              color: '#fff',
              fontWeight: 'bold',
              padding: '5px 15px',
              '&:hover': { backgroundColor: '#368138' }
            };
          } else {
            return {
              textTransform: 'none',
              color: '#fff',
              fontWeight: 'bold',
              padding: '5px 15px'
            };
          }
        }
      }
    }
  }
});
