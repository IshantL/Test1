import React, { Component } from 'react';
import config from '../config';

class DataGrid extends Component{

  constructor(props){
		super(props);
		this.createRow=this.createRow.bind(this);
    this.getRows=this.getRows.bind(this);
	}

  createRow(a, b){
    return <div className='col-2'>{a[b.columnName]}</div>;
  }

  getRows(a){
    let conf = config.headerConfig;
    return conf.map(b => <td>{a[b.columnName]}</td>);

  }
  render () {
    let data = this.props.result;
    let rows, resultRow;
    if(data != null && data.length > 0){
      rows = data.map((a) => {
        let obj = this.getRows(a);
        return <tr>{obj}</tr>;
      });
    }
    return (<tbody>{rows}</tbody>);
  }
}
export default DataGrid;
