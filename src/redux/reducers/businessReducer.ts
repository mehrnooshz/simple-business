import { Reducer } from 'redux';
import BusinessListState from '../state/businessListState';
import {
  BusinessActionTypes,
  BusinessListActions,
} from '../actions/businessActions';

const initialState: BusinessListState = {
  businesses: [],
  sameBusinesses: [],
  business: undefined,
  isFetching: false,
};
const BusinesssListReducer: Reducer<BusinessListState, BusinessListActions> = (
  state = initialState,
  action: BusinessListActions
) => {
  switch (action.type) {
    case BusinessActionTypes.GET_BUSINESS_LIST_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case BusinessActionTypes.GET_BUSINESS_LIST_SUCCESS: {
      return {
        ...state,
        businesses: action.businesses,
        isFetching: false,
      };
    }
    case BusinessActionTypes.CLEAR_STATE: {
      return {
        ...state,
        business: undefined,
        sameBusinesses: [],
      };
    }
    case BusinessActionTypes.GET_BUSINESS_LIST_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case BusinessActionTypes.GET_BUSINESS_DETAIL_SUCCESS: {
      const businessId = action.businessId;
      const business = state.businesses.find((item) => item.id === businessId);
      const sameBusinesses = state.businesses
        .filter((item) => item?.address?.city === business?.address?.city)
        .filter((item) => item.id !== businessId);

      return {
        ...state,
        business,
        sameBusinesses,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

export default BusinesssListReducer;
