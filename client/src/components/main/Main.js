import React, { Component } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import Logo from '../logo/Logo';
import Title from '../title/Title';
import Products from '../products/Products';

const Head = styled.header`
  height: 165px;
  padding: 15px 0 0;
`;

const Form = styled.form`
  float: right;
  height: 28px;
  margin: 0 30px 15px 0;
  width: 470px;
`;

const Input = styled.input`
  background: url('public/img/ico-search.jpg') no-repeat 24px 5px;
  border: 1px solid #ddd;
  border-radius: 50px;
  color: #999;
  display: block;
  font-size: .9em;
  height: 100%;
  padding: 0 60px;
  width: 100%;
`;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'Busque pelo site',
      products: []
    };
  }

  handleChange(e) {
    this.setState({searchVal: e.target.value})
  }

  search = (e) => {
    e.preventDefault();
    const data = e.target.search.value;

    if (data) {
      axios.get(`https://mmartan.herokuapp.com/products?search=` + data)
      .then(res => {
        const products = res.data;
        this.setState({
          search: data,
          products
        });
      })
    }
  }

  render() {
    return (
      <main>
        <Head className='clearfix'>
          <Logo />
          <Form onSubmit={this.search}>
            <Input name='search' onChange={this.handleChange.bind(this)} />
          </Form>
          <Title searchTitle={this.state.search} />
        </Head>
        <Products searchResults={this.state.products} />
      </main>
    );
  }
}