import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { theme } from '../theme';
import { getColor } from './button.styles';
import { RaisedButtonComponent as RaisedButton } from './raised-button.component';

describe('RaisedButton', () => {
  let wrapper: ReactWrapper;
  const testLabel: string = 'Click Me!';

  describe('with a label prop', () => {
    it('will show the label text', () => {
      wrapper = mount(<RaisedButton label={testLabel} />);
      expect(wrapper.contains(testLabel)).toBe(true);
    });
  });

  describe('with children nodes', () => {
    it('will show the children nodes', () => {
      wrapper = mount(
        <RaisedButton>
          {testLabel}
        </RaisedButton>
      );
      expect(wrapper.contains(testLabel)).toBe(true);
    });
  });

  describe('when clicked', () => {
    it('will call the onClick prop', () => {
      const mock = { onClick: () => null };
      const onClickSpy = jest.spyOn(mock, 'onClick');
      wrapper = mount(<RaisedButton onClick={mock.onClick} label={testLabel} />);
      wrapper.find('button').simulate('click');
      expect(onClickSpy).toHaveBeenCalled();
    });
  });

});

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
