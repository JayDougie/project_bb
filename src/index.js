import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import React from 'react'
import BusinessDirectory from './App.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

render(
    <MuiThemeProvider>
      <BusinessDirectory />
    </MuiThemeProvider>
, document.getElementById('root'))
registerServiceWorker();
