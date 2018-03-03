import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import SwipeableViews from 'react-swipeable-views';

// Jeff's home page file imported here
import Home from './Home.js';

// Josh's 2nd page file imported here
import Activities from'./Activities.js';

// Derek's Page 3 external components
import BusinessDirectory from './BusinessDirectory.js';

class App extends Component {
  	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			open: false
		};
	}
	
	handleToggle = () => this.setState({ open: !this.state.open, showList: this.state.showList });
	handleClose = () => this.setState({ open: false, showList: this.state.showList });

	handleTabChange = () => this.setState({value: this.state.value+1});
	handleTabChangeClick = () => this.setState({value: this.state.value});


	// handleTabChange  () {
	// 	this.setState({
	// 	  value: this.state.value + 1,
	// 	});
	// };
	resetTabs = (value) => {
		this.setState({
		  value: 1,
		});
	};

	render() {
		return (
			<div>
				<AppBar title="Belp" onClick={()=>this.setState({value: 0})} titleStyle={{textAlign: 'center'}} onLeftIconButtonClick={this.handleToggle} iconElementRight={<FlatButton label="Get Started"/>} />
				<Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>

						<MenuItem onClick={()=>this.setState({value: 1})}>Home</MenuItem>
						<MenuItem onClick={()=>this.setState({value: 2})}>Businesses</MenuItem>
						<MenuItem onClick={this.handleClose}>My Account</MenuItem>
						<MenuItem onClick={this.handleClose}>Support</MenuItem>
						<MenuItem onClick={this.handleClose}>Sign out</MenuItem>
						<br/><br/><br/>
						<img
						src={require('../src/img/logo.png')} height="210" width="240"
						/>
				</Drawer>
				<Tabs value={this.state.value} >
					<Tab label="Enter Location" value = {0} />
					<Tab label="Select Categories" value = {1}  />
					<Tab label="View Businesses" value = {2} />
				</Tabs>
				<SwipeableViews
					index={this.state.value}>
						<div>
							<Home onClick={this.handleTabChange}/>
						</div>

						<div>
							<Activities onClick={this.handleTabChange}/>
						</div>
					
						<div>
							<BusinessDirectory />
						</div>
				</SwipeableViews>

			</div>
		);
	}
}

export default App;
