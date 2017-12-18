import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mainReducer from '../reducers/mainReducer'
import storiesSaga from '../sagas/mainSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    mainReducer, {},
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension()
    )
)

sagaMiddleware.run(storiesSaga);

export default store;