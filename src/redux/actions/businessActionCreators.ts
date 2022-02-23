import { Dispatch } from 'redux';
import api from 'api/config';

import {
  GetBusinessListStartAction,
  GetBusinessListSuccessAction,
  GetBusinessListFailureAction,
  GetBusinessDetailSuccessAction,
  ClearStateAction,
  BusinessActionTypes,
} from './businessActions';
import Business from 'api/model/business';

export const getBusinessStart = (): GetBusinessListStartAction => {
  return {
    type: BusinessActionTypes.GET_BUSINESS_LIST_START,
  };
};
export const clearState = (): ClearStateAction => {
  return {
    type: BusinessActionTypes.CLEAR_STATE,
  };
};

export const getBusinessDetailSuccess = (
  businessId: string
): GetBusinessDetailSuccessAction => {
  return {
    type: BusinessActionTypes.GET_BUSINESS_DETAIL_SUCCESS,
    businessId: businessId,
  };
};

export const getBussinessSuccess = (
  results: Business[]
): GetBusinessListSuccessAction => {
  return {
    type: BusinessActionTypes.GET_BUSINESS_LIST_SUCCESS,
    businesses: results,
  };
};

export const getBusinessFailure = (
  error: string
): GetBusinessListFailureAction => {
  return {
    type: BusinessActionTypes.GET_BUSINESS_LIST_FAILURE,
    error: error,
  };
};

export const getBusinesses = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getBusinessStart());
    try {
      const response = await api.get('b/60215a7906934b65f530333a');

      dispatch(getBussinessSuccess(response.data));
    } catch (error) {
      dispatch(getBusinessFailure('Could not get Bussiness '));
    }
  };
};

export const getBusinessDetail = (businessId: string) => {
  return (dispatch: Dispatch) => {
    dispatch(getBusinessStart());

    dispatch(getBusinessDetailSuccess(businessId));
  };
};
export const handleClearState = () => {
  return (dispatch: Dispatch) => {
    dispatch(clearState());
  };
};
