import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
axios.defaults.baseURL = "http://121.43.154.5:8080"
export default function* chatSaga() {
    yield takeEvery('GET_CHATLIST', function*(actions) {
        const listRes = yield call(axios.get, '/user/getMagsList', {})
        yield put({ type: "SET_CHATLIST", payload: listRes.data })
    })
}