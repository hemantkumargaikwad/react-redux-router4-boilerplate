import Constants from '../constants';

export const loadApp = () => dispatch => {
    dispatch({
        type: Constants.APP_LOADED,
        payload: 'Welcome To React-Redux-Router V4 boilerplate by Hemantkumar D. Gaikwad'
    });
};
