import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { NavBar, Title, Brand } from './nav.styles';

interface NavLayoutProps {
  title: string;
  visible: boolean;
}

export default (props: NavLayoutProps) => (
  <NavBar visible={props.visible}>
    <Brand>
      <FontAwesomeIcon icon={faAtom} color="white" size="2x" />
    </Brand>
    <Title>{props.title}</Title>
  </NavBar>
);
