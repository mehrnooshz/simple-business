import React from 'react';
import { shallow } from 'enzyme';
import { BusinessSameMock } from 'api/rest/businessMock';
import NewPlaces from './nearPlaces';

describe('new places', () => {
  describe('new places render', () => {
    const wrapper = shallow(
      <NewPlaces title="new" sameBusinesses={[BusinessSameMock]} />
    );

    it('samebusiness exist', () => {
      const items = wrapper.find('li');
      expect(items.length).toBe(1);
      expect(items.find('.col-3').text()).toEqual(BusinessSameMock.name);
      const address = `${BusinessSameMock.address.number}${` `}${
        BusinessSameMock.address.street
      }${` `}Street${`,`}${BusinessSameMock.address.city}${` `}${
        BusinessSameMock.address.zip
      }`;
      expect(items.find('.col-7').text()).toEqual(address);
    });
    it('title exist', () => {
      const item = wrapper.find('h3');
      expect(item.text()).toEqual('new');
    });
  });

  describe('new places render', () => {
    const wrapper = shallow(<NewPlaces title="new" sameBusinesses={[]} />);

    it('samebusiness not exist', () => {
      const items = wrapper.find('li');
      expect(items.length).toBe(0);
    });
  });
});
