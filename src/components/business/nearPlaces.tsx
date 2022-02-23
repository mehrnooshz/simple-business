import React from 'react';
import Business from 'api/model/business';

interface Props {
  sameBusinesses: Business[];
  title: string;
}

export default function NearPlaces({ sameBusinesses, title }: Props) {
  return (
    <div className="near-places bg-white col-5">
      <h3 className="title">{title}</h3>
      <ul>
        {sameBusinesses?.map((item) => (
          <li className="d-flex" key={item?.id}>
            <div className="col-3 description">{item?.name}</div>
            <div className="col-7 description">{`${
              item?.address?.number
            }${` `}${item?.address?.street}${` `}Street${`,`}${
              item?.address?.city
            }${` `}${item?.address?.zip}`}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
