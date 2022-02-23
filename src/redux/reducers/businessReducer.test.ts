import {
  getBusinessFailure,
  getBussinessSuccess,
  getBusinessStart,
  getBusinessDetailSuccess,
} from '../actions/businessActionCreators';
import BusinessListState from '../state/businessListState';
import BusinesssListReducer from './businessReducer';
import {
  BusinessesMock,
  BusinessMock,
  businessIdExistedMock,
  businessIdNotExistedMock,
  BusinessSameMock,
  BusinessDifferentMock,
} from 'api/rest/businessMock';

const initialState: BusinessListState = {
  businesses: [],
  sameBusinesses: [],
  business: undefined,
  isFetching: false,
};

describe('BusinesssListReducer action type responses for', () => {
  describe('getbusinessesStart', () => {
    const action = getBusinessStart();
    const newState = BusinesssListReducer(initialState, action);

    it('is fetching', () => expect(newState.isFetching).toBe(true));
  });

  describe('getBusinessSuccess', () => {
    const results = BusinessesMock;
    const action = getBussinessSuccess(results);
    const newState = BusinesssListReducer(initialState, action);

    it('fetched businesses', () =>
      expect(newState.businesses).toEqual(BusinessesMock));
    it('is not fetching', () => expect(newState.isFetching).toBe(false));
  });

  describe('getbusinessesFailure', () => {
    const action = getBusinessFailure('error');
    const newState = BusinesssListReducer(initialState, action);

    it('has not fetched businesses', () =>
      expect(newState.businesses).toEqual([]));
    it('is not fetching', () => expect(newState.isFetching).toBe(false));
    it('is has error', () => expect(newState.error).toBe('error'));
  });
});

describe('BusinesssListReducer action type responses for', () => {
  describe('getBusinessDetailSuccess businessId found', () => {
    const businessId = businessIdExistedMock;
    const action = getBusinessDetailSuccess(businessId);
    const newState = BusinesssListReducer(
      { ...initialState, businesses: BusinessesMock },
      action
    );

    it('fetched business', () =>
      expect(newState.business).toEqual(BusinessMock));
    it('fetched samebusiness', () => {
      expect(newState.sameBusinesses).toEqual([BusinessSameMock]);
      expect(newState.sameBusinesses).not.toEqual([BusinessDifferentMock]);
    });

    it('is not fetching', () => expect(newState.isFetching).toBe(false));
  });
});

describe('BusinesssListReducer action type responses for', () => {
  describe('getBusinessDetailSuccess businessId not found', () => {
    const businessId = businessIdNotExistedMock;
    const action = getBusinessDetailSuccess(businessId);
    const newState = BusinesssListReducer(
      { ...initialState, businesses: BusinessesMock },
      action
    );

    it('fetched business', () => expect(newState.business).toEqual(undefined));

    it('is not fetching', () => expect(newState.isFetching).toBe(false));
  });
});
