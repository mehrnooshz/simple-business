import Business from 'api/model/business';

export const BusinessMock = {
  name: 'test',
  id: '1',
  description: 'hi',
  phone: '0911',
  image: 'url',
  email: 'a@yahoo.com',
  address: {
    number: '021',
    street: ' book',
    zip: '123',
    city: 'rasht',
    country: 'iran',
  },
};
export const BusinessSameMock = {
  name: 'test2',
  id: '2',
  description: 'hi',
  phone: '0911',
  image: 'url2',
  email: 'b@yahoo.com',
  address: {
    number: '011',
    street: 'cover',
    zip: '456',
    city: 'rasht',
    country: 'iran',
  },
};

export const BusinessDifferentMock = {
  name: 'test3',
  id: '3',
  description: 'hi',
  phone: '0911',
  image: 'url2',
  email: 'c@yahoo.com',
  address: {
    number: '011',
    street: 'cover',
    zip: '456',
    city: 'sofia',
    country: 'bulgharia',
  },
};

export const BusinessesMock: Business[] = [
  BusinessMock,
  BusinessSameMock,
  BusinessDifferentMock,
];

export const businessIdExistedMock: string = '1';
export const businessIdNotExistedMock: string = '4';
