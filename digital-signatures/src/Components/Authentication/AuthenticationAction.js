import * as Types from './AuthenticationActionTypes';
import Axios from 'axios';

export const GetDetails = (link) => {
    return function (dispatch) {
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        };
        Axios.get(link, config)
            .then(response => {
                dispatch({
                    type: Types.GET_DETAILS,
                    payload: response.data
                });
            });
    }
}

//TODO: Validation for empty string
export const Authenticate = (IdNumber, RealIdNumber) => {
    if (IdNumber !== RealIdNumber) {
        console.log("Invalid Id Number");
        return false;
    }
    else if (IdNumber === ' ') {
        console.log("Empty String!");
        return false;
    }
    else {
        console.log("Valid Id Number");
        return true;
    }
}


