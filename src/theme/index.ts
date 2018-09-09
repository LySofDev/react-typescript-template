import { Theme } from './theme';

export { Theme } from './theme';
export { Colors } from './colors';
export { Font } from './font';

// Configure the theme default values
// WARNING: Do not provide empty strings!
export const theme: Theme = {
  boxShadows: {
    lowest: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    lower: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    middle: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    higher: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    highest: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
  },
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
