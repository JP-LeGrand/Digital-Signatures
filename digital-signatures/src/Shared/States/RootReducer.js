import AuthenticationReducer from '../../Components/Authentication/AuthenticationReducers';
import DeclarationReducer from '../../Components/Declaration/DeclarationReducers';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    investorDetails:AuthenticationReducer,
    termsConditons:DeclarationReducer
});

export default RootReducer;