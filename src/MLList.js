import React, { Component } from 'react';
import './index.css';
import MLListItem from './MLListItem';

class MLList extends Component {
    render() {
        return (
            <article className="ml-container ml-list">
                <MLListItem/>
                <MLListItem/>
                <MLListItem/>
                <MLListItem/>
        </article>
        );
    }
}

export default MLList;