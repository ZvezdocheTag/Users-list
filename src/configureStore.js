import { createStore, combineReducers } from 'redux'
import userInfo from './reducers'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'


const configureStore = () => {
    const persistanceState = loadState();
    const store = createStore(userInfo, persistanceState);
    
    store.subscribe(throttle(
        () => {
            saveState(store.getState());
        }, 1000
    ))

    return store;
}
export default configureStore;
