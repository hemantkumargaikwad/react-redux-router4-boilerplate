import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import {identity} from 'lodash';
import {routerMiddleware} from 'react-router-redux';
import reducers from './../reducers';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

const isProduction = process.env.NODE_ENV === 'production'; // eslint-disable-line no-undef
const middleWares = [thunk,
    routerMiddleware(createHistory)];

if (!isProduction)
    middleWares.push(createLogger());

const Store = createStore(
    reducers,
    compose(
        applyMiddleware(
            ...middleWares
        ),
        // devTools || identity
        identity
    )
);

export default Store;
