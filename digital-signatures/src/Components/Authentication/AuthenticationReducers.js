import InitialState from '../../Shared/States/InitialState';
import * as Types from './AuthenticationActionTypes';

const AuthenticationReducer = (state = InitialState.investorDetails, action) => {
    switch (action.type) {
        case Types.GET_DETAILS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export default AuthenticationReducer;