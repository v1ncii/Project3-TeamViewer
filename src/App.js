
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid.js';
import NavBar from './components/AppBar.js';
import BottomBar from './components/BottomBar.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';


const theme = createMuiTheme({
  palette: {
    primary: { 500: '#1b5e20' },
    secondary: {
      main: '#fdd835',
    },
  },
});
class App extends Component {
  render() {
    return(
        <div className="App">
          <MuiThemeProvider theme={theme}>
            <NavBar/>
            <BottomBar/>
            <Grid/>
          </MuiThemeProvider>
        
      </div>
    );
  }
  }


export default App;