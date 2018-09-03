import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { FlashComponent } from './flash.component';

describe("Flash", () => {
  let wrapper: ReactWrapper;
  const testMessage = "This is a test message.";
  const closeFlashMock = () => null;

  describe("with the default state", () => {
    it("renders without crashing", () => {
      wrapper = mount(
        <FlashComponent
          open={false}
          closeFlash={closeFlashMock}
          message={""}
        />
      );
      expect(wrapper).toBeDefined();
    });
  });

  describe("when hidden", () => {
    it("doesn't display the current message", () => {
      wrapper = mount(
        <FlashComponent
          open={false}
          closeFlash={closeFlashMock}
          message={testMessage}
        />
      );
      expect(wrapper.contains(testMessage)).toBe(false);
    });
  });

  describe("when visible", () => {
    it("displays the current message", () => {
      wrapper = mount(
        <FlashComponent
          open={true}
          closeFlash={closeFlashMock}
          message={testMessage}
        />
      );
      expect(wrapper.contains(testMessage)).toBe(true);
    });
  });

});
