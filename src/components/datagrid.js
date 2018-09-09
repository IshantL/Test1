import React, { Component } from 'react';
import config from '../config';
import Pagination from '../pagination';

class DataGrid extends Component{

  constructor(props){
		super(props);
    this.getRows=this.getRows.bind(this);
    this.paginationMovies = this.paginationMovies.bind(this);
	}

  getRows(a){
    let conf = config.headerConfig;
    return conf.map((b, index) => <td key={index}>{a[b.columnName]}</td>);

  }
  paginationMovies (){
    let pagei = Pagination;
    let box = pagei({
        table: document.getElementById("table_box_bootstrap").getElementsByTagName("table")[0],
        box_mode: "list",
    });
    box.className = "box";
    document.getElementById("table_box_bootstrap").appendChild(box);
  }
  componentDidUpdate(){
    this.paginationMovies();
  }
  render () {
    let data = this.props.result, rows;
    if(data != null && data.length > 0){
      rows = data.map((a, index) => {
        let obj = this.getRows(a);
        return <tr key={index}>{obj}</tr>;
      });
    }
    return (<tbody>{rows}</tbody>);
  }
}
export default DataGrid;
