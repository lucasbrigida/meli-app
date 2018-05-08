import React, { Component } from 'react';
import './index.css';

class MLBreadcrumb extends Component {
    render() {
        return (
            <nav className="ml-container">
                <ul className="ml-breadcrumb">
                    <li className="ml-breadcrumb-item">Electrónica, Audio y Video</li>
                    <li className="ml-breadcrumb-item">iPod</li>
                    <li className="ml-breadcrumb-item">Reproductores</li>
                    <li className="ml-breadcrumb-item">iPod touch</li>
                    <li className="ml-breadcrumb-item">32 GB</li>
                </ul>
            </nav>
        );
    }
}

export default MLBreadcrumb;