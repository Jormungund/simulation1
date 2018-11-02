import React, { Component } from 'react';
import './dashboard.css';
import Product from './products/product'

export default class Dashboard extends Component{

    render(){
        const { inventory } = this.props;
        return(
            <div className="invent">
                {inventory.map(inventory=>(
                    <Product product={inventory} key={inventory.id}/>
                ))}
            </div>
        )
    }
}
