import AuthenticationReducer from '../../Components/Authentication/AuthenticationReducers';

import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    investorDetails:AuthenticationReducer
});

export default RootReducer;