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

