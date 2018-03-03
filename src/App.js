import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';
import Drawer from 'material-ui/Drawer';
import MenuItem from'material-ui/MenuItem';

class App extends Component {
  	constructor(props) {
		super(props);
		this.state = { open: false };
	}
	  
	handleToggle = () => this.setState({ open: !this.state.open });
	handleClose = () => this.setState({ open: false });

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
			<AppBar title="Project Black Businesses" titleStyle={{textAlign: 'center'}} onLeftIconButtonClick={this.handleToggle} />
			<Drawer docked={false}
          		open={this.state.open}
          		onRequestChange={(open) => this.setState({open})}>
					<MenuItem onClick={this.handleClose}>Home</MenuItem>
					<MenuItem onClick={this.handleClose}>Businesses</MenuItem>
					<MenuItem onClick={this.handleClose}>My Account</MenuItem>
			</Drawer>
          
			<CircularProgress />
        </div>
      </MuiThemeProvider>

      
    );
  }
}

export default App;
