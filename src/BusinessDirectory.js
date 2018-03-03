import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { FlatButton } from 'material-ui';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {Grid, Row, Col} from 'react-bootstrap';

class BusinessDirectory extends Component {
  	constructor(props) {
		super(props);
		this.state = {
            showList: true,
            businesses: []
		};
	}
    
	toggleList =() => this.setState({ open: this.state.open, showList: !this.state.showList });

	render() {
		const contentStyle = { transition: 'margin-right 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
		
		if (this.state.showList) {
			contentStyle.marginRight = 256;
		}

		return (
			<div style={contentStyle}>
				<Drawer docked={false}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}>
						<MenuItem onClick={this.handleClose}>Home</MenuItem>
						<MenuItem onClick={this.handleClose}>Businesses</MenuItem>
						<MenuItem onClick={this.handleClose}>My Account</MenuItem>
				</Drawer>
				<br />
				<div>
					<MyMapComponent
						isMarkerShown
						googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `400px` }} />}
						mapElement={<div style={{ height: `100%` }} />}
						businesses={this.state.businesses}
					/>
					<BusinessSection show={this.state.showList} businesses={this.state.businesses} />
				</div>
			</div>
		);
	}
}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 28.5383355, lng: -81.3792365 }}
  >
	{	props.isMarkerShown &&
		props.businesses.map(business => (
			<Marker position={business.location} />
		))
	} 
  </GoogleMap>
))

class BusinessSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: this.props.show
		};
	}

	componentWillMount() {
        // Get businesses API call
        
	}

	render() {
		const style = { width: 400 };
		return (
			<Drawer docked={true} open={this.props.show} openSecondary={true} style={style}>
				{this.props.businesses.map(business => (
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
					<b>Category:</b> {this.props.data.category} <br />
					<b>Phone:</b> {this.props.data.phone} <br />
					<b>Hours:</b> {this.props.data.hours} <br />
					<b>Rating:</b> {this.props.data.rating} <br />
				</CardText>
				<CardActions>
					<FlatButton label="View Info" primary={true} />
				</CardActions>
			</Card>
		);
	}
}

// class BusinessInfo extends Component {

// 	render() {
// 		return (

// 		);
// 	}
// }

export default BusinessDirectory;
