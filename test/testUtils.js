import checkProptypes from 'check-prop-types';

import rootReducer from '../src/reducers';
import {middlewares} from '../src/configStore';

import { createStore, applyMiddleware } from 'redux';


/**
 * Creating the testing store with imported reducers
 * @param {*} initialState 
 */
export const storeFactory = (initialState) =>{
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}



/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val)=>{
    return wrapper.find(`[data-test="${val}"]`)
} 



export const checkProps = (component, conformingProps)=>{
    const propError = checkProptypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name);

    expect(propError).toBeUndefined();
};