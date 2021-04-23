export default function chatReducer(state = {}, action) {
    switch (action.type) {
        case "SET_CHATLIST":
            return action.payload
        default:
            return state;
    }
}