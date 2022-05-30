import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';

class Product extends Component {
  render() {
    const {id,title,img,price,inCart} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={()=> console.log('clicked')}>
            <Link to="/detail">
              <img src={img} alt="product" className='card-img-top' />
            </Link>
            <button className='cart-btn' disabled={inCart ? true : false} 
              onClick={()=> {
                console.log('add to cart');
              }}
            />
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>{"  "} in inCart</p>
            ):(
              <i className='fas fa-cart-plus'/>
            )}
          </div>

        </div>
      </ProductWrapper>
    );
  }
}

export default Product;

const ProductWrapper = styled.div`
  border-radius: 50px;
`;