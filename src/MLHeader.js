import React, { Component } from 'react';
import './index.css';

class MLHeader extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            query: ''
        };
    }
    
    handleChange(e) {
        this.setState({query: e.target.value});
    }


    handleClick(e) {
        e.preventDefault();
        this.props.search(this.state.query);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.search(this.state.query);
    }

    render() {
        let search = this.props.query ? this.props.query : this.state.query; 
        if (search){
            console.log('sss');
            this.props.search(search);
        }

        return (
            <div className="ml-header">
                <div className="ml-header-box">
                    <span className="ml-logo"></span>
                    <form className="ml-search" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="ml-input-group">
                            <input type="text" 
                                value={search} 
                                autoComplete="off" 
                                onChange={this.handleChange.bind(this)} 
                                placeholder="Nunca dejes de buscar"/>

                            <a className="ml-btn-search" onClick={this.handleClick.bind(this)}></a>
                        </div>
                    </form>
                </div>    
            </div>
        );
    }
}

export default MLHeader;