import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';
import { theme } from '../theme';
import { TextButtonComponent as TextButton } from './text-button.component';

describe('TextButton', () => {
  let wrapper: ReactWrapper;
  const testLabel: string = 'Click Me!';

  describe('with a label prop', () => {
    it('will show the label text', () => {
      wrapper = mount(<TextButton label={testLabel} />);
      expect(wrapper.contains(testLabel)).toBe(true);
    });
  });

  describe('with children nodes', () => {
    it('will show the children nodes', () => {
      wrapper = mount(<TextButton>{testLabel}</TextButton>);
      expect(wrapper.contains(testLabel)).toBe(true);
    });
  });

  describe('when clicked', () => {
    it('will call the onClick prop', () => {
      const mock = { onClick: () => null };
      const onClickSpy = jest.spyOn(mock, 'onClick');
      wrapper = mount(<TextButton onClick={mock.onClick} label={testLabel} />);
      wrapper.find('button').simulate('click');
      expect(onClickSpy).toHaveBeenCalled();
    });
  });

  describe('when given "accent" as the type prop', () => {
    it('will have the accent color as the text color', () => {
      wrapper = mount(<TextButton type='accent' label={testLabel} />);
      const button = wrapper.find('button').getDOMNode();
      expect(button).toHaveStyleRule('color', theme.colors.accent);
    });
  });

  describe('when given "primary" as the type prop', () => {
    it('will have the primary color as the text color', () => {
      wrapper = mount(<TextButton type='primary' label={testLabel} />);
      const button = wrapper.find('button').getDOMNode();
      expect(button).toHaveStyleRule('color', theme.colors.primary);
    });
  });

  describe('when given "secondary" as the type prop', () => {
    it('will have the background color as the text color', () => {
      wrapper = mount(<TextButton type='secondary' label={testLabel} />);
      const button = wrapper.find('button').getDOMNode();
      expect(button).toHaveStyleRule('color', theme.colors.background);
    });
  });

  describe('when given "warn" as the type prop', () => {
    it('will have the warn color as the text color', () => {
      wrapper = mount(<TextButton type='warn' label={testLabel} />);
      const button = wrapper.find('button').getDOMNode();
      expect(button).toHaveStyleRule('color', theme.colors.warn);
    });
  });

});
