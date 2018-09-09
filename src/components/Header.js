import React, { Component } from 'react';
import HeaderColumn from './HeaderColumn';
import config from '../config';

class Header extends Component{
	constructor(props){
		super(props);
		this.sort=this.sort.bind(this);
	}
	sort(coloumnName){
		this.props.dataSort(coloumnName);
	}
	render(){
		let conf = config.headerConfig;
		let renderHeader = conf.map((obj, index)=> {
			 return <HeaderColumn key={index} sort={this.sort} columnName={obj.displayName} />;
		});

		return(
				<thead>
					<tr>
						{renderHeader}
					</tr>
				</thead>
			)
	}
}
export default Header;
