import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers';

export const middlewares = [ReduxThunk];
const createSToreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export default createSToreWithMiddleware(rootReducer);