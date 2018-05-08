import React, { Component } from 'react';

import './index.css';

import MLHeader from './MLHeader';
import MLBreadcrumb from './MLBreadcrumb';
import MLItemDetail from './MLItemDetail';
import MLFooter from './MLFooter';


class MLDetalhe extends Component {
  render() {
    const {categories} = this.props;

    return (
      <div>
        <MLHeader/>
        <MLBreadcrumb categories={categories}/>
        <MLItemDetail itemId={this.props.itemId}/>
        <MLFooter/>
      </div> 
    );
  }
}

export default MLDetalhe;
