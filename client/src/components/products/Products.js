import React, { Component } from 'react';

import styled from 'styled-components';

import Empty from '../empty/Empty';

const ResultsLength = styled.div`
  margin: 10px auto 30px;
  width: 1070px;

  span {
    border-bottom: 3px solid #dfbe7f;
    padding-top: 32px;
    padding-bottom: 5px;
  }
`;

const Results = styled.div`
  border: 1px solid #edeae9;
  margin: 0 auto;
  width: 1070px;

  .results_result-items {
    padding: 10px
  }

  .results_result-items:not(:first-child) {
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #edeae9;
  }

  .product-image,
  .product-info,
  .product-price {
    float: left;
  }

  .product-image {
    height: 80px;
    margin-right: 15px;
    width: 80px
  }

  .product-info_box {
    margin-top: 15px;
  }

  .product-info_box_bottom {
    color: #58585a;
    font-size: 12px;
  }

  .product-price {
    float: right;
    margin-top: 30px;
  }

  .crossed {
    color: #6d6e70;
    text-decoration: line-through;
  }

  .price-highlight {
    color: #333;
  }
`;

export default class Products extends Component {
  formatMoney = (int) => {
    let tmp = int + '';
    
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    
    if( tmp.length > 6 ) {
      tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    return tmp;
  }

  render() {
    if(this.props.searchResults.length > 0) {
      return (
        <>
          <ResultsLength className='results_length'>
            <span>{this.props.searchResults.length} Produtos encontrados</span>
          </ResultsLength>
          <Results className='results'>
          {this.props.searchResults.map((product, index) =>
            <div className='results_result-items clearfix' key={index}>
              <div className='product-image'>
                <img src={'public/img/products/' + product.image + '.jpeg'} />
              </div>
              <div className='product-info'>
                <div className='product-info_box'>
                  <div className='product-info_box_top'>{product.name}</div>
                  <div className='product-info_box_bottom'>
                    <span>{product.fabric}</span>
                    <span>&nbsp;·&nbsp;</span>
                    <span>{product.category}</span>
                    <span>&nbsp;·&nbsp;</span>
                    <span>{product.color}</span>
                  </div>
                </div>
              </div>
              <div className='product-price'>
                <span className='crossed'>R$ {this.formatMoney(product.value)}</span> por <span className='price-highlight'>R$ {this.formatMoney(product.valueFor)}</span>
              </div>
            </div>
          )}
          </Results>
        </>
      );
    } else {
      return(
        <Empty />
      )
    }
  }
}
