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
		const json = {
			"ok": true,
			"data": [{
				"zipcode": null,
				"website": null,
				"state": "Washington DC",
				"phone_number": null,
				"name": "Supreme Discount Printing",
				"location": {
					"longitude": null,
					"latitude": null
				},
				"hours": {
					"wednesday": {
						"open": null,
						"close": null
					},
					"tuesday": {
						"open": null,
						"close": null
					},
					"thursday": {
						"open": null,
						"close": null
					},
					"sunday": {
						"open": null,
						"close": null
					},
					"saturday": {
						"open": null,
						"close": null
					},
					"monday": {
						"open": null,
						"close": null
					},
					"friday": {
						"open": null,
						"close": null
					}
				},
				"email": null,
				"description": null,
				"country": "USA",
				"city": "Washington DC",
				"category": "Publishing",
				"address_line_2": null,
				"address_line_1": "5031 Bass Pl Se #204"
			}, {
				"zipcode": null,
				"website": null,
				"state": "DC",
				"phone_number": null,
				"name": "Administrative Consultant",
				"location": {
					"longitude": "-76.9283402",
					"latitude": "38.8813035"
				},
				"hours": {
					"wednesday": {
						"open": null,
						"close": null
					},
					"tuesday": {
						"open": null,
						"close": null
					},
					"thursday": {
						"open": null,
						"close": null
					},
					"sunday": {
						"open": null,
						"close": null
					},
					"saturday": {
						"open": null,
						"close": null
					},
					"monday": {
						"open": null,
						"close": null
					},
					"friday": {
						"open": null,
						"close": null
					}
				},
				"email": null,
				"description": null,
				"country": "USA",
				"city": "Washington DC",
				"category": "Business Consultant",
				"address_line_2": null,
				"address_line_1": "5115 F Street SE"
			}, {
				"zipcode": null,
				"website": null,
				"state": "MD",
				"phone_number": null,
				"name": "Tim Weeden Web Developer/SEO",
				"location": {
					"longitude": "-77.2215794",
					"latitude": "39.1190875"
				},
				"hours": {
					"wednesday": {
						"open": null,
						"close": null
					},
					"tuesday": {
						"open": null,
						"close": null
					},
					"thursday": {
						"open": null,
						"close": null
					},
					"sunday": {
						"open": null,
						"close": null
					},
					"saturday": {
						"open": null,
						"close": null
					},
					"monday": {
						"open": null,
						"close": null
					},
					"friday": {
						"open": null,
						"close": null
					}
				},
				"email": null,
				"description": null,
				"country": "USA",
				"city": "Gaithersburg",
				"category": "Developer",
				"address_line_2": null,
				"address_line_1": "135 Timberbrook Ln"
			}, {
				"zipcode": null,
				"website": null,
				"state": "DC",
				"phone_number": null,
				"name": "Waynette Loveness the Realtor",
				"location": {
					"longitude": "-76.9986306",
					"latitude": "38.8928451"
				},
				"hours": {
					"wednesday": {
						"open": null,
						"close": null
					},
					"tuesday": {
						"open": null,
						"close": null
					},
					"thursday": {
						"open": null,
						"close": null
					},
					"sunday": {
						"open": null,
						"close": null
					},
					"saturday": {
						"open": null,
						"close": null
					},
					"monday": {
						"open": null,
						"close": null
					},
					"friday": {
						"open": null,
						"close": null
					}
				},
				"email": null,
				"description": null,
				"country": "USA",
				"city": "Washington DC",
				"category": "Real Estate",
				"address_line_2": null,
				"address_line_1": "519 c street ne"
			}, {
				"zipcode": null,
				"website": null,
				"state": "NJ",
				"phone_number": null,
				"name": "Lauren M Lee, Insurence Agent",
				"location": {
					"longitude": "-74.17269019999999",
					"latitude": "40.7565525"
				},
				"hours": {
					"wednesday": {
						"open": null,
						"close": null
					},
					"tuesday": {
						"open": null,
						"close": null
					},
					"thursday": {
						"open": null,
						"close": null
					},
					"sunday": {
						"open": null,
						"close": null
					},
					"saturday": {
						"open": null,
						"close": null
					},
					"monday": {
						"open": null,
						"close": null
					},
					"friday": {
						"open": null,
						"close": null
					}
				},
				"email": null,
				"description": null,
				"country": "USA",
				"city": "Newark",
				"category": "Insurence",
				"address_line_2": null,
				"address_line_1": "155 Summer Ave"
			}, {
				"zipcode": null,
				"website": null,
				"state": "MD",
				"phone_number": null,
				"name": "Capital Imaging, LLC",
				"location": {
					"longitude": "-77.1004447",
					"latitude": "38.9897299"
				},
				"hours": {
					"wednesday": {
						"open": null,
						"close": null
					},
					"tuesday": {
						"open": null,
						"close": null
					},
					"thursday": {
						"open": null,
						"close": null
					},
					"sunday": {
						"open": null,
						"close": null
					},
					"saturday": {
						"open": null,
						"close": null
					},
					"monday": {
						"open": null,
						"close": null
					},
					"friday": {
						"open": null,
						"close": null
					}
				},
				"email": null,
				"description": null,
				"country": "USA",
				"city": "Bethesda",
				"category": "Health Awareness",
				"address_line_2": null,
				"address_line_1": "4927 Auburn Avenue Suite T-25"
			}, {
				"zipcode": null,
				"website": null,
				"state": "VA",
				"phone_number": null,
				"name": "Johann's Haritique",
				"location": {
					"longitude": "-77.19072899999999",
					"latitude": "38.780935"
				},
				"hours": {
					"wednesday": {
						"open": null,
						"close": null
					},
					"tuesday": {
						"open": null,
						"close": null
					},
					"thursday": {
						"open": null,
						"close": null
					},
					"sunday": {
						"open": null,
						"close": null
					},
					"saturday": {
						"open": null,
						"close": null
					},
					"monday": {
						"open": null,
						"close": null
					},
					"friday": {
						"open": null,
						"close": null
					}
				},
				"email": null,
				"description": null,
				"country": "USA",
				"city": "Springfield",
				"category": "Beauty",
				"address_line_2": null,
				"address_line_1": "7233 Commerce Street"
			}, {
				"zipcode": null,
				"website": null,
				"state": "MD",
				"phone_number": null,
				"name": "Beautys Own Beauty Supply",
				"location": {
					"longitude": "-76.99317119999999",
					"latitude": "38.725637"
				},
				"hours": {
					"wednesday": {
						"open": null,
						"close": null
					},
					"tuesday": {
						"open": null,
						"close": null
					},
					"thursday": {
						"open": null,
						"close": null
					},
					"sunday": {
						"open": null,
						"close": null
					},
					"saturday": {
						"open": null,
						"close": null
					},
					"monday": {
						"open": null,
						"close": null
					},
					"friday": {
						"open": null,
						"close": null
					}
				},
				"email": null,
				"description": null,
				"country": "USA",
				"city": "Fort Washington",
				"category": "Beauty",
				"address_line_2": null,
				"address_line_1": "922 E. Swan Creek Road"
			}, {
				"zipcode": null,
				"website": null,
				"state": "VA",
				"phone_number": null,
				"name": "Others Training Institute",
				"location": {
					"longitude": "-77.0896546",
					"latitude": "38.7531305"
				},
				"hours": {
					"wednesday": {
						"open": null,
						"close": null
					},
					"tuesday": {
						"open": null,
						"close": null
					},
					"thursday": {
						"open": null,
						"close": null
					},
					"sunday": {
						"open": null,
						"close": null
					},
					"saturday": {
						"open": null,
						"close": null
					},
					"monday": {
						"open": null,
						"close": null
					},
					"friday": {
						"open": null,
						"close": null
					}
				},
				"email": null,
				"description": null,
				"country": "USA",
				"city": "Alexandria",
				"category": "Education",
				"address_line_2": null,
				"address_line_1": "7574 Great Swan Court"
			}, {
				"zipcode": null,
				"website": null,
				"state": "DE",
				"phone_number": null,
				"name": "Miss",
				"location": {
					"longitude": "-75.7198195",
					"latitude": "39.6067098"
				},
				"hours": {
					"wednesday": {
						"open": null,
						"close": null
					},
					"tuesday": {
						"open": null,
						"close": null
					},
					"thursday": {
						"open": null,
						"close": null
					},
					"sunday": {
						"open": null,
						"close": null
					},
					"saturday": {
						"open": null,
						"close": null
					},
					"monday": {
						"open": null,
						"close": null
					},
					"friday": {
						"open": null,
						"close": null
					}
				},
				"email": null,
				"description": null,
				"country": "USA",
				"city": "Bear",
				"category": "Wines",
				"address_line_2": null,
				"address_line_1": "2626 Chipmunk Court"
			}]
		};
		this.state = {
            showList: true,
            businesses: json.data,
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
