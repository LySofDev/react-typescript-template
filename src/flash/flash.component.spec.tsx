import * as React from 'react';
import { mount } from 'enzyme';
import { FlashComponent } from './flash.component';

describe("Flash", () => {
  describe("with the default state", () => {
    it("renders without crashing", () => {
      const wrapper = mount(
        <FlashComponent
          open={false}
          closeFlash={() => {}}
          message={"Test Message"}
        />
      );
      expect(wrapper).toBeDefined();
      expect(wrapper.contains("Test Message")).toBe(false);
    });
  });
});
