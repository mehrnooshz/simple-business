import React from 'react';
import { shallow } from 'enzyme';
import AddressContact from './addressContact';
import addressContactMock from 'api/rest/addressContactMock';

describe('AddressContact', () => {
  it('should render AddressContact', () => {
    const title = addressContactMock.title;
    const descriptionFirst = addressContactMock.descriptionFirst;
    const descriptionSecond = addressContactMock.title;
    const wrapper = shallow(
      <AddressContact
        descriptionSecond={descriptionSecond}
        title={title}
        descriptionFirst={descriptionFirst}
      />
    );

    expect(wrapper.contains('title'));
    expect(wrapper.contains('descriptionSecond'));
    expect(wrapper.contains('descriptionFirst'));
  });
});
