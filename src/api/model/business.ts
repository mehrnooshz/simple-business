export default interface Business {
  name: string;
  id: string;
  description: string;
  phone: string;
  image: string;
  email: string;
  address: {
    number: string;
    street: string;
    zip: string;
    city: string;
    country: string;
  };
}
