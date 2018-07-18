import * as React from 'react';
import { Container, Title } from './home.styles';

interface HomeLayoutProps {
  title: string;
}

export default (props: HomeLayoutProps) => (
  <Container>
    <Title>{props.title}</Title>
  </Container>
);
