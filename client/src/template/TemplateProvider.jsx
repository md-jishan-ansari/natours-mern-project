import { createContext, useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const TemplateContext = createContext({
  userData: null,
  setUserData: null,
});

export const TemplateProvider = (props) => {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('profile')));

  const theme = createTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            boxSizing: 'border-box',
          },
          body: {
            lineHeight: '1.6',
            fontFamily: "'Lato', sans-serif",
            color: '#777',
            minHeight: '100vh',
            padding: 30,
            backgroundColor: 'white',
          },
          a: {
            textDecoration: 'none',
          },
          img: {
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          },
        },
      },
      MuiAppBar: {
        root: {
          boxShadow: 'none',
        },
      },
      MuiCardContent: {
        root: {
          padding: 0,
          '&:last-child': {
            paddingBottom: 0,
          },
        },
      },
      MuiButton: {
        root: {
          transition: 'all 0.2s ease-out',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.15)',
          },
          '&.active': {
            transform: 'translateY(-1px)',
            boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.15)',
          },
        },
      },
      MuiDialog: {
        paperScrollPaper: {
          maxHeight: 'none',
        },
      },
      MuiDialogContent: {
        root: {
          '&:first-child': {
            paddingTop: 'none',
          },
        },
      },
    },
    props: {
      MuiAppBar: {
        position: 'static',
      },
    },
  });

  return (
    <TemplateContext.Provider value={{ userData: userData, setUserData: setUserData }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateContext;
