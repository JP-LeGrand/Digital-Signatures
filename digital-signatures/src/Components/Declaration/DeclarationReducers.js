import InitialState from "../../Shared/States/InitialState";
import * as Types from "./DeclarationActionTypes";

const DeclarationReducer = (
    state = InitialState.termsConditions,
    action
) => {
    switch (action.type) {
        case Types.GET_TERM_CONDITONS:
            return {
                ...state,
                termsConditions: action.payload.data
            };
        default:
            return state;
    }
};

export default DeclarationReducer;
