import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
  AnyAction,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppState from './state/appState';
import BusinessListReducer from './reducers/businessReducer';

const rootReducer = combineReducers<AppState>({
  businessListState: BusinessListReducer,

  // TODO: add sub-reducers here...
});

export default function configureStore(): Store<AppState, AnyAction> {
  return createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
