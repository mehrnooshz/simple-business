import React from 'react';
import { mount } from 'enzyme';
import Loading from './';

describe(' Loading render', () => {
  const wrapper = mount(<Loading className="absolute" />);

  describe('renders', () => {
    it('loading have class', () => {
      expect(wrapper.hasClass('absolute')).toEqual(true);
    });
  });
});
