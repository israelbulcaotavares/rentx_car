import React from 'react';
import { BackButtons } from '../../components/BackButtons';


import {
  Container,
  Header
} from './styles';

export function CarDetails(){
  return (
    <Container> 
      <Header>
            <BackButtons onPress={() => {}} />
      </Header>
    </Container>
  );
}