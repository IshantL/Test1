import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class HeaderColumn extends Component{

	sortClick(coloumnName){
		console.log("in sort values"+coloumnName);
		this.props.sort(coloumnName);
	};
	render(){
		return(
				<th onClick={() => this.sortClick(this.props.columnName)}>
					<span>{this.props.columnName}</span>
					<i className="fa fa-sort"></i>
				</th>
			);
	}
}
export default HeaderColumn;
