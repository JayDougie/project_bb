import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

class Home extends Component {
	constructor(props) {
        super(props);
        this.state = { };
    }
	render(){
		var states = [ "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", 
		"KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", 
		"OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY" ]
		return (
			<div>
				<div className="row">
				<img
			 	src={require('../src/img/home-strip2.jpg')} height="904" width="1350"
				 />
			</div>
			

			<div className="homecontainer" style={{textAlign: "center", alignItems: "center"}}>
				<br/>
				<h3 className="text-center">What city are you in?</h3>
				<br/>
				<Paper zDepth={5} style={{width:400, margin: '0 auto'}}>
					<TextField hintText="City"  underlineShow={false} />
					<Divider />
					{/* <SelectField
					floatingLabelText="Select a State"
					value={this.state.value}
					onChange={this.handleChange}
					style ={{width: 200}}
					>
					{states.map(state => (
						<MenuItem value={state} primaryText={state} />
					) )}
        			</SelectField>
					<Divider/> */}
					<TextField hintText="State"  underlineShow={false} />
					<Divider />
				</Paper>
				
				
				<br/><br/>
				<FlatButton label="Find Activities" primary={true} onClick={this.props.onClick} />
				{/* Implement button event handler to change tab */}
				<br/><br/>
			</div>
			</div>
		);
	}
}
export default Home;