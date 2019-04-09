import InitialState from '../../Shared/States/InitialState';
import * as Types from './AuthenticationActionTypes';

const AuthenticationReducer = (state = InitialState.investorDetails, action) => {
    switch (action.type) {
            case Types.GET_DETAILS:
            console.log("Investor Details: ",action.payload.investorDetails);
            return{
                ...state,
                ...action.payload.investorDetails
            }
        default:
        return state;
    }
};

export default AuthenticationReducer;