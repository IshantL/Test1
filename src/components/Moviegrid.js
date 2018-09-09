import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class Moviegrid extends Component{

	constructor(props){
		super(props);
		this.state={
			movies:[]
		};
		this.getMoviesData=this.getMoviesData.bind(this);
	}
	getMoviesData(){
		 axios.get(`http://starlord.hackerearth.com/movieslisting`)
     	.then(res => {
	       this.setState({ movies: JSON.stringify(res.data )});
      });
	}

	componentDidMount(){
		this.getMoviesData();
	}
	render(){
		return(
				<div>
					<Header/>
				</div>
			)
	}
}

export default Moviegrid;