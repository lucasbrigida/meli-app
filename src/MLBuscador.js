import React, { Component } from 'react';
import axios from 'axios';

import './index.css';

import MLHeader from './MLHeader';
import MLBreadcrumb from './MLBreadcrumb';
import MLList from './MLList';
import MLFooter from './MLFooter';

class MLBuscador extends Component {
  render() {
    return (
      <div>
        <MLHeader/>
        <MLBreadcrumb/>
        <MLList/>
        <MLFooter/>
      </div>  
    );
  }
}

export default MLBuscador;
