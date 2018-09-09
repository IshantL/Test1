import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import DataGrid from './datagrid';

class Moviegrid extends Component{

	constructor(props){
		super(props);
		this.state={
			movies: []
		};
		this.fetchData = this.fetchData.bind(this);
		this.dataSort = this.dataSort.bind(this);
	}
	fetchData() {
		const url = `http://starlord.hackerearth.com/movieslisting`;
		fetch (url)
			.then(response => response.json())
			.then(data => {
				this.setState({
					movies: data
				})
			});
	}

	dataSort(columnName){
		console.log("data sort ", columnName);
		let movies = this.state.movies;
		if(movies != null && movies.length > 0){
			let sortedMovies = movies.sort((a, b) => {
				if(a[columnName] < b[columnName]){
					return -1;
				}else if(a[columnName] > b[columnName]){
					return 1;
				}else {
					return 0;
				}
			});
			this.setState({
				movies: sortedMovies
			});
		}
	}
	render(){
		let res = this.fetchData();
		return(
				<div className="container">
					<div className="row">
						<h1>Grid Sample</h1>
					</div>
					<table className="table table-striped">
						<Header dataSort={this.dataSort}/>
						<DataGrid result={this.state.movies}/>
					</table>
				</div>
			)
	}
}

export default Moviegrid;
