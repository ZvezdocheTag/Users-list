import { createStore, combineReducers, applyMiddleware } from 'redux'
import userInfo from './reducers'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const addPromiseSupportToDispatch = (store) => (next) => (action) => {
    if(typeof action.then === 'function') {
        return action.then(next)
    }
    return next(action)
}

const addLogingToDispatch = (store) => {

    return (next) => {
        if(!console.group) {
            return next
        }
        return (action) => {
            console.group(action.type);
            console.log("prev state", store.getState());
            console.log("action", action)
            const returnValue = next(action);
            console.log("%c next state","color: green", store.getState())
            console.groupEnd(action.type)
            return returnValue;
        }
    }
}

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.forEach(middleware => 
        store.dispatch = middleware(store)(store.dispatch)
    )
}

const configureStore = () => {
    const persistanceState = loadState();
    const middlewares = [];
    
    if(process.env.NODE_ENV !== 'production') {
        middlewares.push(addLogingToDispatch)
    }
    middlewares.push(addPromiseSupportToDispatch)


    const store = createStore(
        userInfo, persistanceState, applyMiddleware(...middlewares)
    );
    store.subscribe(throttle(
        () => {
            saveState(store.getState());
        }, 1000
    ))

    return store;
}
export default configureStore;
