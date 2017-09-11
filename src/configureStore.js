import { createStore, combineReducers } from 'redux'
import userInfo from './reducers'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const addLigingToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    return (action) => {
        console.group(action.type);
        console.log("prev state", store.getState());
        console.log("action", action)
        const returnValue = rawDispatch(action);
        console.log("%c next state","color: green", store.getState())
        console.groupEnd(action.type)
        return returnValue;
    }
}
const configureStore = () => {
    const persistanceState = loadState();
    const store = createStore(userInfo, persistanceState);
    
    if(process.env.NODE_ENV !== 'production') {
        store.dispatch = addLigingToDispatch(store);
    }

    store.subscribe(throttle(
        () => {
            saveState(store.getState());
        }, 1000
    ))

    return store;
}
export default configureStore;
