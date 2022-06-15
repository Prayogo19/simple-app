import React, { Component } from 'react';
import Product from './component/Product';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products:[],
        detailProduct:detailProduct,
        cart : [],
        modalOpen : false,
        modalProduct : detailProduct,
        cartSubTotal : 0,
        cartTax : 0,
        cartTotal : 0
    }

    componentDidMount(){
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })

        this.setState(() => {
            return {products:tempProducts};
        });
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id)
        return product;
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct:product}
        })
    }
    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
             return {products:tempProducts, cart:[...this.state.cart, product]}
        })
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product, modalOpen:true}
        })
    }

    closeModal = id => {
        this.setState(()=>{
            return {modalOpen:false}
        })
    }

    increase = id => {
        console.log("this incresase");
    }

    decrease = id => {
        console.log("decrease");
    }

    removeItem = id =>{
        console.log("item Remove");
    }

    clearCart = () => {
        console.log("Cart Cleared")
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                handleDetail:this.handleDetail, 
                addToCart:this.addToCart, 
                openModal:this.openModal, 
                closeModal:this.closeModal, 
                increase:this.increase, 
                decrease:this.decrease, 
                removeItem:this.removeItem, 
                clearCart:this.clearCart}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};