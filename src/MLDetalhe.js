import React, { Component } from 'react';

import './index.css';

import MLHeader from './MLHeader';
import MLBreadcrumb from './MLBreadcrumb';
import MLItemDetail from './MLItemDetail';
import MLFooter from './MLFooter';


class MLDetalhe extends Component {  
  render() {
    return (
      <div>
        <MLItemDetail itemId={this.props.itemId}/>
      </div> 
    );
  }
}

export default MLDetalhe;
