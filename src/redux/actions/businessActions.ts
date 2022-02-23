import Business from '../../api/model/business';

export enum BusinessActionTypes {
  GET_BUSINESS_LIST_START = 'GET_BUSINESS_LIST_START',
  GET_BUSINESS_LIST_SUCCESS = 'GET_BUSINESS_LIST_SUCCESS',
  GET_BUSINESS_LIST_FAILURE = 'GET_BUSINESS_LIST_FAILURE',
  GET_BUSINESS_DETAIL_START = 'GET_BUSINESS_DETAIL_START',
  GET_BUSINESS_DETAIL_SUCCESS = 'GET_BUSINESS_DETAIL_SUCCESS',
  CLEAR_STATE = 'CLEAR_STATE',
}

export interface GetBusinessListStartAction {
  type: BusinessActionTypes.GET_BUSINESS_LIST_START;
}

export interface GetBusinessListSuccessAction {
  type: BusinessActionTypes.GET_BUSINESS_LIST_SUCCESS;
  businesses: Business[];
}

export interface GetBusinessListFailureAction {
  type: BusinessActionTypes.GET_BUSINESS_LIST_FAILURE;
  error: string;
}
export interface GetBusinessDetailStartAction {
  type: BusinessActionTypes.GET_BUSINESS_DETAIL_START;
}
export interface GetBusinessDetailSuccessAction {
  type: BusinessActionTypes.GET_BUSINESS_DETAIL_SUCCESS;
  businessId: string;
}
export interface ClearStateAction {
  type: BusinessActionTypes.CLEAR_STATE;
}

export type BusinessListActions =
  | GetBusinessListStartAction
  | GetBusinessListSuccessAction
  | GetBusinessListFailureAction
  | GetBusinessDetailSuccessAction
  | GetBusinessDetailStartAction
  | ClearStateAction;
