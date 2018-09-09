import { theme } from '../theme';

export class ColorService {
  public static getColor(type: string): string {
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
}
