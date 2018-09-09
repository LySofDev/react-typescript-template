import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import * as Cookies from 'js-cookie';
import { SetCookie } from './set-cookie.component';

describe('SetCookie', () => {
  let wrapper: ReactWrapper;
  const testKey: string = "Foo";
  const testValue: string = "Bar";

  beforeEach(() => { Cookies.remove(testKey); });

  it('will set the key and value as a cookie', () => {
    spyOn(SetCookie.prototype, "componentDidMount");
    wrapper = mount(<SetCookie label={testKey} value={testValue} />);
    expect(wrapper).toBeDefined();
    expect(SetCookie.prototype.componentDidMount).toHaveBeenCalled();
  });

});
