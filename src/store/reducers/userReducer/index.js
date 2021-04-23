const initState = {
    loginRes: {},
    registerRes: {},
    userList: {},
    uid: ''
}
export default function userReducer(state = initState, action) {
    switch (action.type) {
        case "REGISTER_RESPONSE":
            return { ...state, registerRes: action.payload, uid: action.payload.uid }
            case "LOGIN_RESPONSE":
                return { ...state, loginRes: action.payload, uid: action.payload.uid }
                case "USERLIST_RESPONSE":
                    return { ...state, userList: action.payload }
                    default:
                        return state;
    }
}