import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Head = styled.header`
  height: 165px;
  padding: 15px 0 0;
`;

const Logo = styled.img`
  float: left;
  height: 18px;
  margin: 6px 30px 15px;
  width: 140px
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

const Title = styled.h1`
  background-color: #edecf0;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, .2);
  border-bottom: 1px solid #dbdbe2;
  color: #433e66;
  clear: both;
  height: 100px;
  line-height: 100px;
  padding: 0 30px;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
      this.state = { search: 'Pesquise por todo o site' };
    }

  search = (e) => {
    e.preventDefault();
    const data = e.target.search.value;

    if (data) {
      this.setState({ search: data });
    }
  }

  render() {
    return (
      <Head className='clearfix'>
        <Logo src={'public/img/logo.svg'} />
        <Form onSubmit={this.search}>
          <Input name='search' />
        </Form>
        <Title>{this.state.search}</Title>
      </Head>
    );
  }
}
