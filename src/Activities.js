import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from'material-ui/MenuItem';

const arr = [];

const styles = {
    outer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '1em 0 0 0',
    },
    root: {
        display: 'inline-block',
        margin: '0 6px',
    },
    gridList: {
        width: 500,
        height: 500,
        // overflowY: 'auto',
    },
};

const tilesData1 = [
    {
        img: 'images/image1.jpeg',
        category: 'Restaurants',
        featured: true,
    },
    {
        img: 'images/image2.jpeg',
        category: 'Salons',
    },
    {
        img: 'images/image3.jpeg',
        category: 'Bars',
    },
    {
        img: 'images/image4.jpeg',
        category: 'Clubs',
    },
    {
        img: 'images/image5.jpeg',
        category: 'Grocery Stores',
    },
];

const tilesData2 = [
    {
        img: 'images/image6.jpeg',
        category: 'Clothing',
    },
    {
        img: 'images/image7.jpeg',
        category: 'Photography',
    },
    {
        img: 'images/image8.jpeg',
        category: 'Babysitting',
    },
    {
        img: 'images/image9.jpeg',
        category: 'Skilled Labor',
    },
    {
        img: 'images/image10.jpeg',
        category: 'Museum',
        featured: true,
    }
];

const GridListExampleComplex1 = () => (
    <div style={styles.root}>
        <GridList
            cols={2}
            cellHeight={120}
            padding={10}
            style={styles.gridList}
        >
            {tilesData1.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.category}
                    titlePosition="top"
                    titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    cols={tile.featured ? 2 : 1}
                    rows={tile.featured ? 2 : 1}
                    onClick={addData(tile.category)}
                >
                    <img src={tile.img} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

const GridListExampleComplex2 = () => (
    <div style={styles.root}>
        <GridList
            cols={2}
            cellHeight={120}
            padding={10}
            style={styles.gridList}
        >
            {tilesData2.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.category}
                    titlePosition="top"
                    titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    cols={tile.featured ? 2 : 1}
                    rows={tile.featured ? 2 : 1}
                    onClick={addData(tile.category)}
                >
                    <img src={tile.img} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

function addData(category) {
    arr.push(category);
}

function sendData() {
    // send data to backend -> API CALLS
    console.log(arr);
}

class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });

    render() {
        return (
                <div >
                    <div style={styles.outer}>
                        <GridListExampleComplex1 />
                        <GridListExampleComplex2 />
                    </div>
                    <br/>
                    <div className="shrink" style={{width: "20%", margin: '0 auto'}}>
                        <RaisedButton onClick={this.props.onClick} label="Find Businesses!"  style={{width: 300}} primary={true} />
                    </div>
                </div>
        );
    }
}

export default Activities;