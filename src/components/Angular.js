import React from 'react';
import styled from 'styled-components/native';

export default class Angular extends React.Component {
  render() {
    return (
      <Container>
        <TextStyled>Angular Jeopardy!</TextStyled>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #222;
  align-items: center;
  justify-content: center;
`

const TextStyled = styled.Text`
  color: red;
  font-size: 15px;
`