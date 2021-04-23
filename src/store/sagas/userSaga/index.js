import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
axios.defaults.baseURL = "http://121.43.154.5:8080"

export default function* userSaga() {
    yield takeEvery('REGISTER_PARAMS', function*(actions) {
        const registerRes = yield call(axios.post, '/user/register', actions.payload)
        yield put({ type: "REGISTER_RESPONSE", payload: registerRes.data })
    })
    yield takeEvery('USER_LOGIN', function*(actions) {
        const loginRes = yield call(axios.post, '/user/login', actions.payload)
        yield put({ type: "LOGIN_RESPONSE", payload: loginRes.data })
    })
    yield takeEvery('USER_LIST', function*(actions) {
        const listRes = yield call(axios.get, '/user/list', {})
        yield put({ type: "USERLIST_RESPONSE", payload: listRes.data })
    })
}