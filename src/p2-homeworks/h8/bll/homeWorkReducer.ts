export const homeWorkReducer = (state: { _id: number, name: string, age: number }[],
                                action: { type: string, payload: string | number }):
    { _id: number, name: string, age: number }[] => {
    switch (action.type) {
        case "sort":
            const deeepState = [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            const deeepState2 = [...state].sort((a, b) => a.name < b.name ? 1 : -1)
            return action.payload == "up" ? deeepState : deeepState2
        case "check":
            const deepState3 = [...state].filter(f => f.age > action.payload)
            return deepState3
        default:
            return state
    }
};