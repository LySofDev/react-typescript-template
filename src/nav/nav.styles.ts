import { default as styled } from '../styled-components';
import { theme } from '../theme';

interface NavBarProps {
  visible: boolean;
}

export const NavBar = styled.nav`
  left: 0;
  right: 0;
  height: ${(props: NavBarProps) => props.visible ? '3.5rem' : '0'};
  background-color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
`

export const Title = styled.span`
  color: ${theme.inverted ? 'black' : 'white'};
  font-size: 1.5rem;
  font-weight: bold;
`

export const Brand = styled.span`
  margin: 0 0.5rem;
`
