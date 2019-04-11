import * as Types from './DeclarationActionTypes';
import Axios from 'axios';

/**
 * @param ActionType Is the type of action sent e.g. Accept, Reject, Report Fraud
 * @param InvestorID is the ID of the Investor responding to the T's and C's
 */
export const GetInvestorRespone = (ActionType, InvestorID) => {
    return function (){
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        };
        let InformationPassed = {
            Answer : ActionType,
            Identification: InvestorID
        };    
            Axios.post('', InformationPassed, config)
                .then(() => {
                    window.location = '/Confirmation';
                });
    }
}

export const GetTerms_Condition = ( ) => {
    return function(dispatch){
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        };
        Axios.get('',config)
        .then(response =>
            {
                dispatch({
                    type: Types.GET_TERM_CONDITONS,
                    payload: response
                });
            });
        }
}
