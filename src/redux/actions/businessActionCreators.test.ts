import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import api from 'api/config';

import { BusinessesMock, businessIdExistedMock } from 'api/rest/businessMock';

import {
  getBusinessDetail,
  getBusinessStart,
  getBussinessSuccess,
  getBusinessDetailSuccess,
  getBusinesses,
} from './businessActionCreators';
import { BusinessActionTypes } from './businessActions';

const mockStore = configureMockStore([thunk]);

describe('getBusinesses', () => {
  beforeEach(() => moxios.install(api));
  afterEach(() => moxios.uninstall(api));

  it(`creates ${BusinessActionTypes.GET_BUSINESS_LIST_START}, ${BusinessActionTypes.GET_BUSINESS_LIST_SUCCESS} after successfuly fetching BUSINESS`, () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: BusinessesMock,
      });
    });

    const expectedActions = [
      getBusinessStart(),
      getBussinessSuccess(BusinessesMock),
    ];

    const initialState = {
      bussinesses: [],
      isFetching: false,
    };
    const store = mockStore(initialState);

    return store.dispatch<any>(getBusinesses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(`creates ${BusinessActionTypes.GET_BUSINESS_LIST_START}, ${BusinessActionTypes.GET_BUSINESS_LIST_FAILURE} after failing to fetch BUSINESS`, () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
      });
    });

    const store = mockStore({ BUSINESS: [] });

    return store.dispatch<any>(getBusinesses()).then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(2);

      const getBusinesstartAction = actions[0];
      expect(getBusinesstartAction.type).toBe(
        BusinessActionTypes.GET_BUSINESS_LIST_START
      );

      const getBusinessFailureAction = actions[1];
      expect(getBusinessFailureAction.type).toBe(
        BusinessActionTypes.GET_BUSINESS_LIST_FAILURE
      );
      expect(getBusinessFailureAction.error).not.toBe(null);
      expect(getBusinessFailureAction.error).toBeDefined();
    });
  });
});

describe('getBusinessDetail', () => {
  it(`creates ${BusinessActionTypes.GET_BUSINESS_DETAIL_START}, ${BusinessActionTypes.GET_BUSINESS_DETAIL_SUCCESS} after getting business id`, () => {
    const expectedActions = [
      getBusinessStart(),
      getBusinessDetailSuccess(businessIdExistedMock),
    ];

    const initialState = {
      businesses: [],
      business: undefined,
      sameBusiness: [],
      isFetching: false,
    };
    const store = mockStore(initialState);

    store.dispatch<any>(getBusinessDetail(businessIdExistedMock));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
