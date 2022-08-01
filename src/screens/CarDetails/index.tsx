import React from 'react';
import { BackButtons } from '../../components/BackButtons';
import { StatusBar } from 'react-native';

import {
  Container,
  Header,
  CarImages
} from './styles';
import { ImageSlider } from '../../components/ImageSlider';

export function CarDetails() {
  return (
    <Container>

      <Header>
        <BackButtons onPress={() => { }} />
      </Header>

    <CarImages>
      <ImageSlider
        imagesUrl={['https://purepng.com/public/uploads/large/purepng.com-audiaudicarluxurious-carprofessional-carwhite-audired-audi-17015274093953ufxk.png']}
      />
      </CarImages>
    </Container>
  );
}