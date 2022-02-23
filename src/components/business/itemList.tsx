import React, { FunctionComponent } from 'react';
import Business from 'api/model/business';
import Loading from 'components/loading';

interface Props {
  businesses: Business[];
  isFetching: boolean;
  error?: string;
  goToBusiness: (id: string) => void;
}

const ItemList: FunctionComponent<Props> = ({
  businesses,
  error,
  isFetching,
  goToBusiness,
}: Props) => {
  return (
    <div className="container">
      {isFetching ? (
        <Loading />
      ) : (
        <ul className="responsive-table bg-white">
          <li className="table-header d-flex">
            <div className="col-3 title">NAME</div>
            <div className="col-7 title">DESCRIPTION</div>
          </li>
          {businesses?.map((item) => (
            <li
              className="table-row cursor-pointer d-flex"
              key={item?.id}
              onClick={() => goToBusiness(item?.id)}
            >
              <div className="col-3" data-label="NAME">
                {item?.name}
              </div>
              <div className="col-7" data-label="DESCRIPTION">
                {item?.description}
              </div>
            </li>
          ))}
        </ul>
      )}

      {error && <div className="d-flex item-center mb-2">{error}</div>}
    </div>
  );
};

export default ItemList;
