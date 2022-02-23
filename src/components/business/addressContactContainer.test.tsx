import React from 'react';
import TestRenderer from 'react-test-renderer';
import AddressContactContainer from './addressContactContainer';
import { BusinessMock } from 'api/rest/businessMock';
import AddressContact from './addressContact';

describe('AddressContact', () => {
  describe('AddressContact render', () => {
    const testRenderer = TestRenderer.create(
      <AddressContactContainer business={BusinessMock} />
    );

    it('should render AddressContact First', () => {
      const testInstance = testRenderer.root;
      const addressDescriptionFirst = `${BusinessMock.address.number}${` `}${
        BusinessMock.address.street
      }${` `}Street`;
      const addressDescriptionSecond = `${BusinessMock.address.city}${`,`}${
        BusinessMock.address.zip
      }${` `}`;
      expect(
        testInstance.findAllByType(AddressContact)[0].props.descriptionFirst
      ).toBe(addressDescriptionFirst);
      expect(
        testInstance.findAllByType(AddressContact)[0].props.descriptionSecond
      ).toBe(addressDescriptionSecond);
    });

    it('should render AddressContact Second', () => {
      const testInstance = testRenderer.root;
      const contactDescriptionFirst = `${BusinessMock.name}${` `}${
        BusinessMock.phone
      }`;
      const contactDescriptionSecond = `${BusinessMock.email}`;
      expect(
        testInstance.findAllByType(AddressContact)[1].props.descriptionFirst
      ).toBe(contactDescriptionFirst);
      expect(
        testInstance.findAllByType(AddressContact)[1].props.descriptionSecond
      ).toBe(contactDescriptionSecond);
    });
  });
});
