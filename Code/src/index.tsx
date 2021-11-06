import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { MsalProvider } from '@azure/msal-react'
import { Configuration, PublicClientApplication } from '@azure/msal-browser'
import styled from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import { pink } from '@material-ui/core/colors'

//MSAL Config
const msalConfig: Configuration = {
  auth: {
    clientId: '6c246756-3060-4888-9313-d4d005e7f8cc',
    authority: 'https://MyTeslaStats.b2clogin.com/MyTeslaStats.onmicrosoft.com/B2C_1_MyTeslaStats-Signup',
    knownAuthorities: ['MyTeslaStats.b2clogin.com'],
    redirectUri: 'http://localhost:4000/',
  },
}

const publicClientApp = new PublicClientApplication(msalConfig)

const StyledAppArea = styled.div`
  height: 100%
  margin-top: 0px;
  margin-right: 0px;
  margin-left: 0px;
  margin-bottom: 0px;
`

const darkTheme = createMuiTheme({
  palette: {
    common: {},
    type: 'light',
    primary: {
      light: pink[300],
      main: pink[500],
      dark: pink[600],
    },
    secondary: {
      light: blue['A200'],
      main: blue['A400'],
      dark: blue['A700'],
    },
    background: {
      default: '#FFFFFF',
    },
  },
})

ReactDOM.render(
  <StyledAppArea>
    <MsalProvider instance={publicClientApp}>
      <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </MsalProvider>
  </StyledAppArea>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
