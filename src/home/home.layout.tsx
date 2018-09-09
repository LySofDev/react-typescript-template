import * as React from 'react';
import { Container, Title } from './home.styles';
import { TextButton, RaisedButton } from '../button';

interface HomeLayoutProps {
  title: string;
}

export default (props: HomeLayoutProps) => (
  <Container>
    <Title>{props.title}</Title>
    <p>
      <TextButton type="primary" label="Primary Text Button"/>
    </p>
    <p>
      <TextButton type="secondary" label="Secondary Text Button" />
    </p>
    <p>
      <TextButton type="accent" label="Accent Text Button" />
    </p>
    <p>
      <TextButton type="warn" label="Warn Text Button" />
    </p>
    <p>
      <RaisedButton type="primary">Primary Raised Button</RaisedButton>
    </p>
    <p>
      <RaisedButton type="secondary">Secondary Raised Button</RaisedButton>
    </p>
    <p>
      <RaisedButton type="accent">Accent Raised Button</RaisedButton>
    </p>
    <p>
      <RaisedButton type="Warn">Warn Raised Button</RaisedButton>
    </p>
  </Container>
);
