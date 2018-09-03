import { injectGlobal } from './styled-components';
import { theme } from './theme';

// Calling without this riduculous ignore work around
// raises an unused expression error on tslint.
const ignoreMe = injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.font.family};
    font-size: ${theme.font.size};
  }
`

const ignore = (subject: any) => null;
ignore(ignoreMe);
