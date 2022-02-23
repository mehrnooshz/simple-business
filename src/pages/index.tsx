import React, { useEffect } from 'react';
import BusinessList from 'components/business/itemList';
import { useNavigate } from 'react-router-dom';
import { getBusinesses } from 'redux/actions/businessActionCreators';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import AppState from 'redux/state/appState';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  const { businesses, error, isFetching } = useSelector((state: AppState) => {
    return {
      businesses: state.businessListState.businesses,
      error: state.businessListState.error,
      isFetching: state.businessListState.isFetching,
    };
  }, shallowEqual);

  const goToBusiness = (id: string) => {
    navigate(`/business/${id}`);
  };
  return (
    <BusinessList
      businesses={businesses}
      error={error}
      isFetching={isFetching}
      goToBusiness={goToBusiness}
    />
  );
}

export default App;
