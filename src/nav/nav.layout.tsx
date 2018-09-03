import * as React from 'react';
import { NavBar, Title } from './nav.styles';

interface NavLayoutProps {
  title: string;
  visible: boolean;
}

export default (props: NavLayoutProps) => (
  <NavBar visible={props.visible}>
    <Title>{props.title}</Title>
  </NavBar>
);
