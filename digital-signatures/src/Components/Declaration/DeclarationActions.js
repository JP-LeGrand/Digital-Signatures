import * as Types from './DeclarationActionTypes';
import Axios from 'axios';
import { toast } from 'mdbreact';

export const GetInvestorRespone = (ActionType, InvestorID) => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    };
    let InformationPassed = {
        Answer: ActionType,
        Identification: InvestorID
    };
    Axios.post('https://fndigisigtest0001.azurewebsites.net/api/PushMessageToQueue?code=EkaOP2oahBHAfSU0FNZisxMYSCAiaMDNRD9HygcN8D0MEqxVWqF1Qg==', InformationPassed, config)
        .then(response => {
            return true;
        }).catch(error => {
            toast.error("Response has not been captured: " + error, {
                autoClose: 3000
            });
        });

}

export const GetTerms_Condition = () => {
    return function (dispatch) {
        const config = {
            headers: {
                'content-type': 'text/html'
            }
        };
        Axios.get('https://fndigisigtest0001.azurewebsites.net/api/GetTemplate?code=Y5CDDlejIfU8ejqQshKdQceGVrDnOtWdoGJqxHt2TlUeoT6fGWPyKg==&version=V1', config)
            .then(response => {
                dispatch({
                    type: Types.GET_TERM_CONDITONS,
                    payload: response
                });
            }).catch(error => {
                toast.error("An error has occured on the server, we are unable to retrieve the terms and conditions: " + error, {
                    autoClose: 3000
                });
            });
    }
}
