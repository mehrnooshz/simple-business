import React from 'react';
import AddressContact from 'components/business/addressContact';
import Business from 'api/model/business';

interface Props {
  business: Business;
}
export default function AddressContactContainer({ business }: Props) {
  return (
    <div className="address-contact col-5 d-flex">
      <AddressContact
        title={'Address'}
        descriptionFirst={`${business?.address?.number}${` `}${
          business?.address?.street
        }${` `}Street`}
        descriptionSecond={`${business?.address?.city}${`,`}${
          business?.address?.zip
        }${` `}`}
      ></AddressContact>

      <AddressContact
        title={'Contact'}
        descriptionFirst={`${business?.name}${` `}${business?.phone}`}
        descriptionSecond={`${business?.email}`}
      ></AddressContact>
    </div>
  );
}
