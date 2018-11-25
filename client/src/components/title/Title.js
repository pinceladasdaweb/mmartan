import React, { Component } from 'react';

import styled from 'styled-components';

const SearchVal = styled.h1`
  background-color: #edecf0;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, .2);
  border-bottom: 1px solid #dbdbe2;
  color: #433e66;
  clear: both;
  height: 100px;
  line-height: 100px;
  padding: 0 30px;
`;

export default class Title extends Component {
  render() {
    return (
      <SearchVal>{this.props.searchTitle}</SearchVal>
    );
  }
}