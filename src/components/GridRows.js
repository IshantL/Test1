import React, { Component } from 'react';
import GridRow from './GridRow.js';

class GridRows extends Component{

    getDefaultProps () {
        return ({
            data: [],
            columnMetadata: [],
            onRowClick:()=>{},
            onChangeGrid:()=>{}
        });
    };

    render() {
        var rowclassName = this.props.CustomRow ? 'customRowContainer' : 'defaultRowContainer';
        rowclassName += this.props.showCheckbox ? ' showCheck' : '';
        var rows = this.props.data.map((item, index)=> {
            return (
                <GridRow {...this.props}
                         rowId={index}
                         data={item}
                         key={index} className={rowclassName + ' row-' + index}
                />
            );
        });
        return (
            <div className={'gridRowsContainer' + (this.props.fixedHeight ? ' defaultScrollHeight' : '')}
                 style={Number.isInteger(this.props.fixedHeight) ? {
                     overflowY: 'scroll',
                     height: this.props.fixedHeight
                 } : {}}>
                 {rows}
            </div>
        );
    }
};

export default GridRows;
