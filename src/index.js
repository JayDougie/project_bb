import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import React from 'react'
import App from './App.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

render(
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
, document.getElementById('root'))
registerServiceWorker();
