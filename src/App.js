import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Form from './components/form/form';
import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state={
      inventory:[]
    }
    this.createProduct = this.createProduct.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/products`).then(results=>{
      this.setState({inventory: results.data})
    })
  }

  createProduct(name, imageurl, price) {
    console.log('asdfklj')
    axios.post(`/api/products`, {name, imageurl, price}).then(results=>{
      console.log(results.data)
      this.setState({inventory: results.data});
    })
  }

  render() {
    const { inventory } = this.state;
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={inventory}/>
        <Form createProductFn={this.createProduct}/>
      </div>
    );
  }
}

export default App;
