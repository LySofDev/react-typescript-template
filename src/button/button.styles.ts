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

export const TextButton = styled.button`
  color: ${(props: ButtonProps) => getColor(props.type)};
`
