import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs';
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
			tabValue: 1,
			open: false
		};
	}
	
	handleToggle = () => this.setState({ open: !this.state.open, showList: this.state.showList });
	handleClose = () => this.setState({ open: false, showList: this.state.showList });

	handleTabChange = (value) => {
		this.setState({
		  value: this.state.value + 1,
		});
	};
	resetTabs = (value) => {
		this.setState({
		  value: 1,
		});
	};

	render() {
		return (
			<div>
				<AppBar title="Project Black Businesses" titleStyle={{textAlign: 'center'}} onLeftIconButtonClick={this.handleToggle} />
				<Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
						<MenuItem onClick={this.handleClose}>Home</MenuItem>
						<MenuItem onClick={this.handleClose}>Businesses</MenuItem>
						<MenuItem onClick={this.handleClose}>My Account</MenuItem>
				</Drawer>
				<Tabs value={this.state.value}>
					<Tab label="Enter Location">
						<div>
							<Home onClick={this.handleTabChange}/>
						</div>
					</Tab>
					<Tab label="Select Categories">
						<div>
							<Activities onClick={this.handleTabChange}/>
						</div>
					</Tab>
					<Tab label="View Businesses">
						<div>
							<BusinessDirectory />
						</div>
					</Tab>
				</Tabs>
			</div>
		);
	}
}

export default App;
