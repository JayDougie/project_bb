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
            businesses: [],
			viewingBusiness: false,
			businessToView: {}
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
    
	toggleList = () => this.setState({
		json: this.state.json,
		businesses: this.state.businesses,
		showList: !this.state.showList,
		viewingBusiness: this.state.viewingBusiness,
		businessToView: this.state.businessToView
	});

	viewBusiness(business) {
		console.log(business);
		this.setState({
			json: this.state.json,
			showList: this.state.showList,
			businesses: this.state.businesses,
			viewingBusiness: true,
			businessToView: business
		});
	}

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
							googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA9vstyymV8-xqiTirktAW967Hu89BQ2sw&callback=initMap"
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `400px` }} />}
							mapElement={<div style={{ height: `100%` }} />}
							businesses={this.state.businesses}
						/>
					</Col>
					{(this.state.showList) ? 
						<Col md={4}>
							<BusinessSection show={this.state.showList} businesses={this.state.businesses}
								viewBusiness={this.viewBusiness} />
						</Col>
						:
						<Col mdHidden></Col>
					}
				</Row>
				{/* {(this.state.viewingBusiness) ? 
					<Row>
						<Col md={8}>
							<BusinessInfo data={this.state.businessToView} />
						</Col>
					</Row>
					:
					<Row></Row>
				} */}
				
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
			<Marker position={(business.location) ? 
				{lat: business.location.latitude, lng: business.location.longitude} : {}} />
		))
	} 
  </GoogleMap>
))

class BusinessSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showBusinessInfo: false
		};
	}

	viewBusiness(business) {
		this.props.viewBusiness(business);
	}

	render() {
		return (
			<div>
				{this.props.businesses.map(business => (
					<BusinessListing data={business} viewBusiness={this.viewBusiness}/>
				))}
			</div>
		);
	}
}

class BusinessListing extends Component {
	constructor(props) {
		super(props);
	}

	viewBusiness() {
		this.props.viewBusiness(this.props.data);
	}

	render() {
		return (
			<Card>
				<CardHeader title={this.props.data.name} />
				<CardText>
					<b>Category:</b> {this.props.data.category} <br />
					<b>Phone:</b> {this.props.data.phone_number} <br />
					<b>Hours:</b> <br />
					<b>Website:</b> {this.props.data.website} <br />
				</CardText>
				<CardActions>
					<FlatButton label="View Info" primary={true}
						/*onClick={this.viewBusiness}*/ />
				</CardActions>
			</Card>
		);
	}
}

// class BusinessInfo extends Component {

// 	constructor(props) {
// 		super(props);
// 		console.log(this.props.data);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<Card>
// 				<CardHeader title={this.props.data.name} />
// 					<CardText>
// 						<b>Address:</b> {this.props.data.address_line_1} <br/>
// 						<b>State:</b> {this.props.data.state}, {this.props.data.zipcode} <br />
// 						<b>Country:</b> {this.props.data.country} <br />
// 						<b>Category:</b> {this.props.data.category} <br />
// 						<b>Phone:</b> {this.props.data.phone_number} <br />
// 						<b>Hours:</b> <br />
// 						<b>Email:</b> {this.props.data.email} <br />
// 						<b>Website:</b> {this.props.data.website} <br />
// 					</CardText>
// 					<CardActions>
// 					<FlatButton label="Visit Website" />
// 					</CardActions>
// 				</Card>
// 			</div>
// 		);
// 	}
// }

export default BusinessDirectory;
