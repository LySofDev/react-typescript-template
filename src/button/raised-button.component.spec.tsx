import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';
import { theme } from '../theme';
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
      wrapper = mount(<RaisedButton>{testLabel}</RaisedButton>);
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

  describe('when given "accent" as the type prop', () => {
    it('will have the accent color as the background color', () => {
      wrapper = mount(<RaisedButton type='accent' label={testLabel} />);
      const button = wrapper.find('button').getDOMNode();
      expect(button).toHaveStyleRule('background', theme.colors.accent);
    });
  });

  describe('when given "primary" as the type prop', () => {
    it('will have the primary color as the background color', () => {
      wrapper = mount(<RaisedButton type='primary' label={testLabel} />);
      const button = wrapper.find('button').getDOMNode();
      expect(button).toHaveStyleRule('background', theme.colors.primary);
    });
  });

  describe('when given "secondary" as the type prop', () => {
    it('will have the background color as the background color', () => {
      wrapper = mount(<RaisedButton type='secondary' label={testLabel} />);
      const button = wrapper.find('button').getDOMNode();
      expect(button).toHaveStyleRule('background', theme.colors.background);
    });
  });

  describe('when given "warn" as the type prop', () => {
    it('will have the warn color as the background color', () => {
      wrapper = mount(<RaisedButton type='warn' label={testLabel} />);
      const button = wrapper.find('button').getDOMNode();
      expect(button).toHaveStyleRule('background', theme.colors.warn);
    });
  });

});
