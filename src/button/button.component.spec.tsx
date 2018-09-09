import { theme } from '../theme';
import { getColor } from './button.styles';

describe( 'getColor', () => {

  describe( 'given the type "primary"', () => {
    it( 'will return the primary color', () => {
      expect( getColor( 'primary' ) ).toEqual( theme.colors.primary );
    });
  });

  describe( 'given the type "secondary"', () => {
    it( 'will return the background color', () => {
      expect( getColor( 'secondary' ) ).toEqual( theme.colors.background );
    });
  });

  describe( 'given the type "accent"', () => {
    it( 'will return the accent color', () => {
      expect( getColor( 'accent' ) ).toEqual( theme.colors.accent );
    });
  });

  describe( 'given the type "warn"', () => {
    it( 'will return the warn color', () => {
      expect( getColor( 'warn' ) ).toEqual( theme.colors.warn );
    });
  });

  describe('given any other type', () => {
    it('will return the primary color', () => {
      expect( getColor( 'any' ) ).toEqual( theme.colors.primary );
    });
  });

});
