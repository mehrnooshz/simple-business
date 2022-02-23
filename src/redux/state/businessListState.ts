import Business from 'api/model/business';

export default interface BusinessListState {
  businesses: Business[];
  sameBusinesses: Business[];
  isFetching: boolean;
  error?: string;
  business: Business | undefined;
}
