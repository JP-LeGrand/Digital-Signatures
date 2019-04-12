import AuthenticationReducer from '../../Components/Authentication/AuthenticationReducers';
import DeclarationReducer from '../../Components/Declaration/DeclarationReducers';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    investorDetails: AuthenticationReducer,
    termsConditions: DeclarationReducer
});

export default RootReducer;