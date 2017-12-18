import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mainReducer from '../reducers/mainReducer'
import storiesSaga from '../sagas/mainSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    mainReducer, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ ?
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__()
    ) :
    compose(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(storiesSaga);

export default store;
