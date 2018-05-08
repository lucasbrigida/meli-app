import React, { Component } from 'react';
import './index.css';

class MLHeader extends Component {
    render() {
        return (
            <div className="ml-header">
                <div className="ml-header-box">
                    <span className="ml-logo"></span>
                    <form className="ml-search" action="#" method="get">
                        <div className="ml-input-group">
                            <input type="text" autoComplete="off" placeholder="Nunca dejes de buscar"/>
                            <a className="ml-btn-search" href="#"></a>
                        </div>
                    </form>
                </div>    
            </div>
        );
    }
}

export default MLHeader;