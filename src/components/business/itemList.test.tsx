import React from 'react';
import { shallow } from 'enzyme';
import Business from 'api/model/business';
import { BusinessesMock } from 'api/rest/businessMock';
import ItemList from './itemList';

describe(' businesses itemList', () => {
  describe('without businesses', () => {
    const wrapper = shallow(
      <ItemList
        goToBusiness={() => {}}
        businesses={[]}
        isFetching={false}
        error={undefined}
      />
    );

    describe('renders', () => {
      it('check empty list and container', () => {
        const element = (
          <ul className="responsive-table bg-white">
            <li className="table-header d-flex">
              <div className="col-3 title">NAME</div>
              <div className="col-7 title">DESCRIPTION</div>
            </li>
          </ul>
        );
        const item = wrapper.find('.table-row');
        expect(wrapper.contains(element)).toEqual(true);
        expect(item.length).toEqual(0);
      });
    });
  });

  describe('with businesses', () => {
    const businesses: Business[] = BusinessesMock;
    const wrapper = shallow(
      <ItemList
        goToBusiness={() => {}}
        businesses={businesses}
        isFetching={false}
        error={undefined}
      />
    );
    const business: Business = businesses[0];
    const businessesLength = businesses?.length;
    describe('renders', () => {
      it('a list item per business', () => {
        const container = wrapper.find('.responsive-table');
        expect(container.length).toEqual(1);
        const items = container.find('.table-row .col-3');
        expect(items.length).toBe(businessesLength);
        const item = items.first();
        expect(item.text()).toEqual(business.name);
      });

      it('navigate page after click', () => {
        const mockedUsedNavigate = jest.fn();
        const wrapper = shallow(
          <ItemList
            goToBusiness={mockedUsedNavigate}
            businesses={businesses}
            isFetching={false}
            error={undefined}
          />
        );

        jest.mock('react-router-dom', () => ({
          ...(jest.requireActual('react-router-dom') as any),
          useNavigate: () => mockedUsedNavigate,
        }));
        wrapper.find('.table-row').first().simulate('click');
        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
      });
    });
  });
});
