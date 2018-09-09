import React, { Component } from 'react';
import DefaultFooter from './DefaultFooter.js';

class GridFooter extends Component{

    onChangeGrid(event, data) {
        var newData = data;
        newData.selectedRows = {};
        this.props.onChangeGrid(event, newData);
    };

    getInitialState() {
        var totalPages = Math.ceil(this.props.numberOfEntries / this.props.resultsPerPage);
        return ({
            totalPages: totalPages
        })
    };

    handleFooterClick(data, event) {
        this.props.onFooterClick && this.props.onFooterClick(data, event);
    };

    render () {
        var optionsArray = [];
        for (var i = 1; i <= this.state.totalPages; i++) {
            optionsArray.push(
                <option >{i}</option>
            )
        }
        var Footer = this.props.showFooter ? this.props.CustomFooter ? this.props.CustomFooter : DefaultFooter : null;

        return (
            <div>
                {Footer ? <Footer {...this.props}
                                  onChangeGrid={this.onChangeGrid}
                                  onFooterClick={this.handleFooterClick}/> : null}
            </div>
        )
    }
};

export default GridFooter;