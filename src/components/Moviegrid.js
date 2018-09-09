import React, { Component } from 'react';
import Header from './Header';
import DataGrid from './datagrid';


class Moviegrid extends Component{

	constructor(props){
		super(props);
		this.state={
			movies: [],
			apicall:true
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
					movies: data,
					apicall:false
				})
			});
	}

	dataSort(columnName){
		console.log("data sort ", columnName);
		let movies = this.state.movies;
		if(movies !== null && movies.length > 0){
			let sortedMovies = movies.sort((a, b) => {
				if(a[columnName] < b[columnName]){
					return a-b;
				}else if(a[columnName] > b[columnName]){
					return b-a;
				}else {
				}
			});
			this.setState({
				movies: sortedMovies
			});
		}
	}

	render(){
		if(this.state.apicall){
			this.fetchData();
		}
		return(
				<div className="container">
					<div className="row">
						<h1>Grid Sample</h1>
					</div>
					<div id="table_box_bootstrap">
						<table className="table table-striped">
							<Header dataSort={this.dataSort}/>
							<DataGrid result={this.state.movies}/>
						</table>
					</div>
				</div>
			);
	}
}

export default Moviegrid;
