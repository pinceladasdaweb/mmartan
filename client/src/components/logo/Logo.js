import React, { Component } from 'react';

import styled from 'styled-components';

const Img = styled.img`
  float: left;
  height: 18px;
  margin: 6px 30px 15px;
  width: 140px
`;

export default class Logo extends Component {
  render() {
    return (
      <Img src={'public/img/logo.svg'} />
    );
  }
}