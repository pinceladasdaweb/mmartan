import React, { Component } from 'react';

import styled from 'styled-components';

const EmptySearch = styled.div`
  margin: 0 auto;
  width: 1070px;
`;

export default class Search extends Component {
  render() {
    return (
      <EmptySearch>
        <p>Vamos, fique a vontade e efetue uma busca pelo site.</p>
      </EmptySearch>
    );
  }
}