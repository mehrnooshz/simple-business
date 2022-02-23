import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer, {
  ReactTestRenderer,
  ReactTestInstance,
} from 'react-test-renderer';
import { BusinessMock, BusinessSameMock } from 'api/rest/businessMock';
import Business from './';
import AppState from 'redux/state/appState';
import { BrowserRouter } from 'react-router-dom';
import { Store } from 'redux';
import AddressContactContainer from 'components/business/addressContactContainer';
import ImageContainer from 'components/business/imgContainer';
import NearPlaces from 'components/business/nearPlaces';
import { cleanup } from '@testing-library/react';
describe('Business', () => {
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
          <Business />
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

    describe('if a business exist', () => {
      const business = BusinessMock;
      const sameBusiness = BusinessSameMock;
      const state = createEmptyState();
      state.businessListState.business = business;
      state.businessListState.sameBusinesses = [sameBusiness];
      state.businessListState.business = business;

      let component: ReactTestRenderer;
      let addressContactContainer: ReactTestInstance;
      let image: ReactTestInstance;
      let nearPlaces: ReactTestInstance;

      beforeEach(() => {
        component = createTestRenderer(createMockStore(state));
        image = component.root.findByType(ImageContainer);
        nearPlaces = component.root.findByType(NearPlaces);
        addressContactContainer = component.root.findByType(
          AddressContactContainer
        );

        const element = component.root.findByType('div');
        expect(element.props.className.includes('container')).toBe(true);
      });

      it('ImageContainer check props', () => {
        expect(image.props.imgSrc).toBe(business.image);
      });

      it('AddressContactContainer check props business', () => {
        expect(addressContactContainer.props.business).toBe(business);
      });

      it('samebusiness existed', () => {
        expect(nearPlaces.props.sameBusinesses).toEqual([sameBusiness]);
      });
      afterEach(() => {
        cleanup();
      });
    });
  });

  describe('if business no exist', () => {
    const business = undefined;
    const state = createEmptyState();
    state.businessListState.business = business;

    const mockStore = configureStore([thunk]);
    const wrapper = mount(
      <BrowserRouter>
        <Provider store={mockStore(state)}>
          <Business />
        </Provider>
      </BrowserRouter>
    );
  });
});
