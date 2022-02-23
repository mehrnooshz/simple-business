import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
  getBusinessDetail,
  handleClearState,
} from 'redux/actions/businessActionCreators';
import AppState from 'redux/state/appState';
import AddressContactContainer from 'components/business/addressContactContainer';
import ImgContainer from 'components/business/imgContainer';
import NearPlaces from 'components/business/nearPlaces';
import Loading from 'components/loading';

export default function Business() {
  const params = useParams();
  const businessId = params.id;
  const dispatch = useDispatch();

  const { business, sameBusinesses, isFetching } = useSelector(
    (state: AppState) => {
      return {
        business: state.businessListState.business,
        sameBusinesses: state.businessListState.sameBusinesses,
        isFetching: state.businessListState.isFetching,
      };
    },
    shallowEqual
  );

  useEffect(() => {
    dispatch(getBusinessDetail(businessId as string));

    return () => {
      dispatch(handleClearState());
    };
  }, [businessId, dispatch]);

  return (
    <div className="business-container">
      {isFetching ? (
        <Loading />
      ) : (
        <div className="container">
          {business && (
            <>
              <ImgContainer imgSrc={business?.image}></ImgContainer>
              <div className="d-flex info-container">
                <AddressContactContainer
                  business={business}
                ></AddressContactContainer>
                <NearPlaces
                  sameBusinesses={sameBusinesses}
                  title="Near Places"
                ></NearPlaces>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
