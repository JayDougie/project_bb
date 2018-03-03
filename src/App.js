import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { FlatButton } from 'material-ui';

class BusinessDirectory extends Component {
  	constructor(props) {
		super(props);
		this.state = {
			open: false,
			showList: true
		};
	}
	
	handleToggle = () => this.setState({ open: !this.state.open, showList: this.state.showList });
	
	handleClose = () => this.setState({ open: false, showList: this.state.showList });

	toggleList =() => this.setState({ open: this.state.open, showList: !this.state.showList });

	render() {
		const contentStyle = { transition: 'margin-right 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

		if (this.state.showList) {
			contentStyle.marginRight = 256;
		}

		return (
			<div style={contentStyle}>
				<AppBar title="Project Black Businesses" titleStyle={{textAlign: 'center'}} onLeftIconButtonClick={this.handleToggle} 
				iconElementRight={<FlatButton label={this.state.showList ? "Hide List" : "Show List"} />} onRightIconButtonClick={this.toggleList} />
				<Drawer docked={false}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}>
						<MenuItem onClick={this.handleClose}>Home</MenuItem>
						<MenuItem onClick={this.handleClose}>Businesses</MenuItem>
						<MenuItem onClick={this.handleClose}>My Account</MenuItem>
				</Drawer>
				<BusinessSection show={this.state.showList} />
			</div>
		);
	}
}

class BusinessSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: this.props.show,
			businesses: [
				{
					business_name: "Business 1",
					address: 'Lynn, MA',
					category: "Entertainment",
					phone: "999-999-9999",
					hours: "Open 24/7",
					rating: "5/5"
				},
				{
					business_name: "Business 2",
					address: 'Boston, MA',
					category: "Retail",
					phone: "111-111-1111",
					hours: "Open 24/5",
					rating: "3/5"
				}
			]
		};
	}

	// componentWillMount() {
	// 	// Get businesses API call

	// }

	render() {
		return (
			<Drawer id="listDrawer" docked={true} open={this.props.show} openSecondary={true}>
				{this.state.businesses.map(business => (
					<BusinessListing data={business} />
			))}
			</Drawer>
		);
	}
}

class BusinessListing extends Component {

	render() {
		return (
			<Card>
				<CardHeader 
					title={this.props.data.business_name}
				/>
				<CardText>
					Category: {this.props.data.category} <br />
					Phone: {this.props.data.phone} <br />
					Hours: {this.props.data.hours} <br />
					Rating: {this.props.data.rating} <br />
				</CardText>
				<CardActions>
					<FlatButton label="View Info" primary={true} />
				</CardActions>
			</Card>
		);
	}
}

// class Map extends Component {
	
// 	render() {
// 		return (

// 		);
// 	}
// }

// class BusinessInfo extends Component {

// 	render() {
// 		return (

// 		);
// 	}
// }

export default BusinessDirectory;
