import { default as styled } from '../styled-components';
import { theme } from '../theme';

export function getColor(type: string): string {
  switch(type) {

    case "primary":
      return theme.colors.primary;

    case "secondary":
      return theme.colors.background;

    case "accent":
      return theme.colors.accent;

    case "warn":
      return theme.colors.warn;

    default:
      return theme.colors.primary;
  }
}

interface ButtonProps {
  type: string;
}

const ButtonStyles = `
  border: none;
  background: none;
  padding: 0.75rem 1rem;
  cursor: pointer;
`

export const TextButton = styled.button`
  ${ButtonStyles}
  color: ${(props: ButtonProps) => getColor(props.type)};
`

export const RaisedButton = styled.button`
  ${ButtonStyles}
  background: ${(props: ButtonProps) => getColor(props.type)};
  color: ${theme.inverted ? 'black' : 'white' };
  box-shadow: ${theme.boxShadows.lowest};
  border-radius: 0.25em;
`
