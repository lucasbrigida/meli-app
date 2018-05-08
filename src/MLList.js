import React, { Component } from 'react';

import './index.css';

import MLListItem from './MLListItem';

class MLList extends Component {
    render() {
        let listItems = (this.props.items).map((item, index) => 
            <MLListItem key={index} item={item}/>
        );

        return (
            <article className="ml-container ml-list">{ listItems }</article>
        ); 
    }
}

export default MLList;