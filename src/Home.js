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
		var states = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
	"MA","MI","MN","MS","MO","MT","NE","NV","NH","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","TN","TX","UT","VT",
	"VA","WA","WV","WI","WY"]
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
					<TextField hintText="State"  underlineShow={false} />
					<Divider />
				</Paper>
				
				<SelectField
					floatingLabelText="Frequency"
					value={this.state.value}
					onChange={this.handleChange}
					autoWidth={true}
					>
					{states.map(state => (
						<MenuItem value={state} primaryText={state} />
					) )}
        		</SelectField>
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