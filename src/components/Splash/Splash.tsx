import React from 'react';

import {
  Container,
  Logo,
  Subtitle,
} from './Splash.styles';

export function Splash() {
  return (
    <Container>
      <Logo
        source={require('../../assets/images/vitrine-logo.png')}
        resizeMode="contain"
      />

      <Subtitle>
        Tudo o que você precisa{'\n'}
        em um só lugar
      </Subtitle>
    </Container>
  );
}