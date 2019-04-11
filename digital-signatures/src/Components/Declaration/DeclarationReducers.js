import InitialState from '../../Shared/States/InitialState';
import * as Types from './DeclarationActionTypes';

const AuthenticationReducer = (state = InitialState.termsConditons, action) => {
    switch (action.type) {
            case Types.GET_TERM_CONDITONS:
            console.log("Investor Details: ",action.payload);
            return{
                ...state,
                ...action.payload
            }
        default:
        return state;
    }
};

export default AuthenticationReducer;