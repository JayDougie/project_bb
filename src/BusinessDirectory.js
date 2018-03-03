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
            businesses: [
				{
					business_name: 'Business Name',
					location: {},
					phone: '123-456-7890',
					category: 'Food & Dining',
					rating: '3/5'
				}
			]
		};

		// Get businesses API call
		var parameters = { // parameters to send
			"search": "",
			"city": "Orlando", // optional
			"state": "FL", // optional
			"categories": []  // optional
		};
		
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.open("POST", "/api/businesses");
		oReq.setRequestHeader("Content-Type", "application/json");
		oReq.send(JSON.stringify(parameters));
		function reqListener () { // Callback function for what to do with response
			console.log(this.responseText);
		}
	}
    
	toggleList = () => this.setState({ businesses: this.state.businesses, showList: !this.state.showList });

	render() {
		return (
			<Grid>
				<br />
				<Row>
					<Col xsOffset={this.state.showList ? 8 : 12}>
						<FlatButton label={this.state.showList ? "Hide List" : "Show List"} onClick={this.toggleList} />
					</Col>
				</Row>
				<br />
				<Row>
					<Col md={this.state.showList ? 8 : 12}>
						<MyMapComponent
							isMarkerShown
							googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `300px` }} />}
							mapElement={<div style={{ height: `100%` }} />}
							businesses={this.state.businesses}
						/>
					</Col>
					{(this.state.showList) ? 
						<Col md={4}>
							<BusinessSection show={this.state.showList} businesses={this.state.businesses} />
						</Col>
						:
						<Col mdHidden></Col>
					}
				</Row>
			</Grid>
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

	render() {
		return (
			<div>
				{this.props.businesses.map(business => (
					<BusinessListing data={business} />
				))}
			</div>
		);
	}
}

class BusinessListing extends Component {
	render() {
		return (
			<Card>
				<CardHeader title={this.props.data.business_name} />
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

class BusinessInfo extends Component {

	render() {
		return (
			<div>
				<Card>
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
			</div>
		);
	}
}

export default BusinessDirectory;
