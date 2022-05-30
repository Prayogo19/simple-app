import React, { Component } from 'react';
import Product from './component/Product';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products:storeProducts,
        detailProduct:detailProduct
    }
    handleDetail = () => {
        console.log('hello Detail')
    }
    addToCart = () => {
        console.log('hello cart');
    }
    render() {
        return (
            <ProductContext.Provider value={{...this.state, handleDetail:this.handleDetail, addToCart:this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};