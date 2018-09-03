import { Theme } from './theme';

export { Theme } from './theme';
export { Colors } from './colors';
export { Font } from './font';

// Configure the theme default values
// WARNING: Do not provide empty strings!
export const theme: Theme = {
  colors: {
    accent: "#f6de6c", // Light Yellow
    background: "#34738f", // Light Blue
    primary: "#be3e2b", // Dark Orange
    warn: "#ed8a45", // Light Orange
  },
  font: {
    family: "sans-serif",
    size: "14px"
  },
  inverted: false, // True for dark text
};

export default theme;
