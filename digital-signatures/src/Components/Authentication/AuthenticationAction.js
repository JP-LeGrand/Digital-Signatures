import * as Types from './AuthenticationActionTypes';
import Axios from 'axios';
import { toast } from 'mdbreact';

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
        toast.error("Invalid Id Number",{
            autoClose:3000
        } );
        toast.warn("You have 2 more tries to authenticate",{
            autoClose:3000
        } );
        return false;
    }
    else if (IdNumber === ' ') {
        toast.error("Empty String!",{
            autoClose:3000
        } );
        toast.warn("You have 2 more tries to authenticate",{
            autoClose:3000
        } );
        return false;
    }
    else {
        return true;
    }
}


