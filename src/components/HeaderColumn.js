import React, { Component } from 'react';

class HeaderColumn extends Component{

	constructor(props){
		super(props);
	}

	render(){
		console.log("hfhfhfhfhfh")
		return(
				<div className='header-column'>
				console.log("jdhjdgjdgh",this.props.columnName)
					{this.props.columnName}
				</div>
			)
	}
}
export default HeaderColumn;
