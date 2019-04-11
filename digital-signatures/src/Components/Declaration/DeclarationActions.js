import * as Types from './DeclarationActionTypes';
import Axios from 'axios';

export const GetInvestorRespone = (ActionType, InvestorID) => {
    console.log("Investor Resposne");
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    };
    let InformationPassed = {
        Answer: ActionType,
        Identification: InvestorID
    };
    Axios.post('https://fndigisigtest0001.azurewebsites.net/api/fndeodstest0001?code=REW0FWuUmVieHhoFb83q/knTIh5M8KJBuHjId5tHSguUD9voR9KQGg==', InformationPassed, config)
        .then(response => {
            console.log("API RESPONSE: ", response);
            return true;
        }).catch(error => {
            console.log("Error", error);
        })

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
                console.log("Template", response);
                dispatch({
                    type: Types.GET_TERM_CONDITONS,
                    payload: response
                });
            });
    }
}
