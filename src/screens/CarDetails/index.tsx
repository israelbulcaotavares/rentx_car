import React from 'react';
import { BackButtons } from '../../components/BackButtons';
import { StatusBar } from 'react-native';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About
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

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.

        </About>
      </Content>
    </Container>
  );
}