import { default as styled } from '../styled-components';
import { theme } from '../theme';
import { ColorService } from './color.service';

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
  color: ${(props: ButtonProps) => ColorService.getColor(props.type)};
`

export const RaisedButton = styled.button`
  ${ButtonStyles}
  background: ${(props: ButtonProps) => ColorService.getColor(props.type)};
  color: ${theme.inverted ? 'black' : 'white' };
  box-shadow: ${theme.boxShadows.lowest};
  border-radius: 0.25em;
`
