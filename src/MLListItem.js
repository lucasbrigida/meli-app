import React, { Component } from 'react';

class MLListItem extends Component {
    render() {
        return (
            <section className="ml-list-item">
                <div className="ml-list-item-content">
                    <div className="ml-list-item-image">
                        <img src="/items/0/thumbnail.png"/>
                    </div>
                    <div className="ml-list-item-info">
                        <div className="row">
                            <div className="ml-list-item-price">$ 1.980</div>
                            <div className="ml-list-item-free-delivery"></div>
                            <div className="ml-list-item-origin">Capital Federal</div>
                        </div>
                        <div className="row">
                            <div className="ml-list-item-description">
                                Apple Ipod Touch 5g 16gb Negro Igual A Nuevo
                                <br/> Completo Unico!
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MLListItem;