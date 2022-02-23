import React from 'react';
import { shallow } from 'enzyme';
import { BusinessMock } from 'api/rest/businessMock';
import ImageContainer from './imgContainer';

describe(' imgContainer ', () => {
  describe('imgContainer render', () => {
    const wrapper = shallow(<ImageContainer imgSrc={BusinessMock.image} />);

    it('check imgSrc', () => {
      const item = wrapper.find('.img-container img');

      expect(item.prop('src')).toEqual(BusinessMock.image);
    });
  });
});
