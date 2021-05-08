const initState = {
    isLoading: false

};


export const loadingReducer = (state = initState, action: ActionType): { isLoading: boolean } => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {...state, isLoading: action.valueLoading};
        }
        default:
            return state;
    }
};
export type ActionType = {
    type: "LOADING"
    valueLoading: boolean
}
export const loadingAC = (valueLoading: boolean): ActionType => {
    return {
        type: "LOADING", valueLoading,
    }
}; // fix any