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

export const Authenticate = (IdNumber, RealIdNumber) => {
    if (IdNumber !== RealIdNumber) {
        toast.error("Unable to Submit. This ID number is invalid, please make sure you typed it correctly", {
            autoClose: 3000
        });
        toast.warn("You have 2 more tries to authenticate", {
            autoClose: 3000
        });
        return false;
    }
    else if (IdNumber === '') {
        toast.error("Unable to Submit. This ID number is invalid, please make sure you typed it correctly", {
            autoClose: 3000
        });
        toast.warn("You have 2 more tries to authenticate", {
            autoClose: 3000
        });
        return false;
    }
    else {
        return true;
    }
}


