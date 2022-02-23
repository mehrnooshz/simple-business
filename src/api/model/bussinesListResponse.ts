import Business from './business';

export default interface BusinessListResponse {
  count: number;
  next: string;
  previous: string;
  results: Business[];
}
