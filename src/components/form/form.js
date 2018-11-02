import React, { Component } from 'react';
import '../../reset.css';
import './form.css';

export default class Form extends Component {
    constructor(){
        super()

        this.state={
            image: '',
            placeholderImage: 'https://www.freeiconspng.com/uploads/no-image-icon-4.png',
            name: '',
            price: 0
        }
        this.handleChangeImage = this.handleChangeImage.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
        this.handleClickCancel = this.handleClickCancel.bind(this)
        this.handleClickAdd = this.handleClickAdd.bind(this)
    }

    handleChangeImage(val){
        this.setState({image:val, placeholderImage: val})
    }

    handleChangeName(val){
        this.setState({name:val})
    }

    handleChangePrice(val){
        this.setState({price:val})
    }

    handleClickCancel(){
        this.setState({
            image: '',
            name: '',
            placeholderImage: 'https://www.freeiconspng.com/uploads/no-image-icon-4.png',
            price: 0
        })
    }

    handleClickAdd() {
        const { image, name, price } = this.state;
        const { createProductFn } = this.props;
        
        createProductFn(name, image, price);
        this.setState({
            image: '',
            name: '',
            placeholderImage: 'https://www.freeiconspng.com/uploads/no-image-icon-4.png',
            price: 0
        })
      }

    render(){
        return(
            <div className="form">
                <div className="picBackground"><img src={this.state.placeholderImage} alt="pic" className="noPic"/></div>
                <section className="inputs">
                    <h2>Image URL:</h2>
                    <input className="input" value={ this.state.image } onChange={e=>this.handleChangeImage(e.target.value)}/>
                </section>
                <section className="inputs">
                    <h2>Product Name:</h2>
                    <input className="input" value={ this.state.name }onChange={e=>this.handleChangeName(e.target.value)}/>
                </section>
                <section className="inputs">
                    <h2>Price:</h2>
                    <input type="number" value={this.state.price} onChange={e=>this.handleChangePrice(e.target.value)} className="input"/>
                </section>
                <section className="buttons">
                    <button onClick={()=>this.handleClickCancel()} className="button">Cancel</button>
                    <button onClick={()=>this.handleClickAdd() } className="button">Add to Inventory</button>
                </section>
            </div>
        )
    }
}