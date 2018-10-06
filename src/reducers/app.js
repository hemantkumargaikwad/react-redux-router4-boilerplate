import createReducer from '../utils/createReducer';
import Constants from '../constants';

const initialState = {
    welcomeMessage: ''
};

export default createReducer(initialState, {
    [Constants.APP_LOADED](state, payload) {
        return Object.assign({}, state, {
            welcomeMessage: payload
        });
    }
});
