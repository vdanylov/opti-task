import { call, put, takeEvery } from 'redux-saga/effects'
import constants from '../constants/index'
import { getStories } from '../actions/storiesActions'

function* fetchStories(){
    try {
        yield put({type: constants.SET_STORIES_LOADING, isLoading: true});
        const stories = yield call(getStories);
        yield put({type: constants.GET_STORIES_SUCCESS, stories: stories});
        yield put({type: constants.SET_STORIES_LOADING, isLoading: false});
    } catch (error) {
        yield put({type: "GET_STORIES_ERROR", error: error});
        yield put({type: constants.SET_STORIES_LOADING, isLoading: false});        
    }
}

function* storiesSaga(){
    yield takeEvery("GET_STORIES", fetchStories)
}

export default storiesSaga;

