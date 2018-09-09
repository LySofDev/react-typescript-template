import { BoxShadows } from './box-shadows';
import { Colors } from './colors';
import { Font } from './font';

export interface Theme {
  boxShadows: BoxShadows;
  colors: Colors;
  font: Font;
  inverted: boolean;
}
