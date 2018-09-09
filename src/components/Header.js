import React, { Component } from 'react';
import HeaderColumn from './HeaderColumn';

class Header extends Component{

	constructor(props){
		super(props);
	}
	
	headerConfig=[{
		name: 'Genre',
		width: ''
	},
	{
		name: 'Language',
		width: ''
	}];


	render(){
	
		let renderHeader=this.headerConfig.map(obj => {
			 return <HeaderColumn columnName={obj.name} columnWidth={obj.width}/>
		});

		return(
				<div className='header-row'>
					{renderHeader}
				</div>
			)
	}
}
export default Header;


