import React, { Component } from 'react';

class HeaderColumn extends Component{

	sortClick(coloumnName){
		console.log("in sort values"+coloumnName);
		this.props.sort(coloumnName);
	};
	render(){
		return(
				<th onClick={() => this.sortClick(this.props.columnName)}>
					{this.props.columnName}
				</th>
			);
	}
}
export default HeaderColumn;
