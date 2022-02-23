import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer, {
  ReactTestRenderer,
  ReactTestInstance,
} from 'react-test-renderer';
import { BusinessesMock } from 'api/rest/businessMock';
import App from './';
import AppState from 'redux/state/appState';
import { BrowserRouter } from 'react-router-dom';
import { Store } from 'redux';
import ItemList from 'components/business/itemList';
import { cleanup } from '@testing-library/react';

describe('App', () => {
  const createMockStore = configureStore<AppState>([thunk]);

  const createEmptyState = (): AppState => {
    return {
      businessListState: {
        businesses: [],
        sameBusinesses: [],
        business: undefined,
        isFetching: false,
      },
    };
  };

  const createTestRenderer = (store: Store<AppState>): ReactTestRenderer => {
    return renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  };

  describe('should be rendered', () => {
    it('inside a redux Provider', () => {
      createTestRenderer(createMockStore(createEmptyState()));
    });

    it('and it should match the expected snapshot', () => {
      expect(
        createTestRenderer(createMockStore(createEmptyState())).toJSON()
      ).toMatchSnapshot();
    });

    describe('if business exist check props of itemList', () => {
      const businesses = BusinessesMock;
      const isFetching = false;
      const error = undefined;
      const state = createEmptyState();
      state.businessListState.businesses = businesses;
      state.businessListState.isFetching = isFetching;
      state.businessListState.error = error;

      let component: ReactTestRenderer;
      let itemList: ReactTestInstance;

      beforeEach(() => {
        component = createTestRenderer(createMockStore(state));
        itemList = component.root.findByType(ItemList);
      });
      it('check business props in itemList', () => {
        expect(itemList.props.businesses).toBe(businesses);
      });
      it('check isFetching props in itemList', () => {
        expect(itemList.props.isFetching).toBe(isFetching);
      });
      it('check error props in itemList', () => {
        expect(itemList.props.error).toBe(error);
      });
      afterEach(() => {
        cleanup();
      });
    });
  });
});
