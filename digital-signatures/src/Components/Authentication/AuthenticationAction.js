import * as Types from './AuthenticationActionTypes';
import Axios from 'axios';
import base64 from 'base-64';
import Substring from 'react-substring';


export const GetDetails = () => {
    return function(dispatch){
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        };
        Axios.get("https://dedatusvstoragetest.blob.core.windows.net/investor-details/14cc56be7900456989351522c948c108.json?sv=2018-03-28&sr=b&sig=J6k5RbVu%2BpCMIlDNUJyJJaR7Ax6%2FZWrUHLW%2BgaY3eMM%3D&se=2019-04-11T11%3A12%3A10Z&sp=r",config)
        .then(response =>
            {
                dispatch({
                    type: Types.GET_DETAILS,
                    payload: response.data
                });
            });
        } 
}

//TODO: Validation for empty string
export const Authenticate= (IdNumber, RealIdNumber) =>{
    if(IdNumber!==RealIdNumber){
        console.log("Invalid Id Number");
    }
    else if(IdNumber===' '){
        console.log("Empty String!");
    }
    else{
        console.log("Valid Id Number");
        window.location="/Declaration";
    }
}

/**
 * 
 * @param link this will be the encrypted link sent to us, that needs to be decoded
 * It will then be passed to GetDetails function
 * 
 */
export const GetLink= (link)=>{
    let decodedLink= base64.decode(link.substring(63));
    let decodedURI= decodeURI(decodedLink);

    //Below I will pass the decoded URI into the GetDetails function
}


