import { v4 } from 'node-uuid'
import validateUserInfo from './validation'
import { combineReducers } from 'redux'

const CLEAR_STORE_USER = "CLEAR_STORE_USER"

const ADD_USER = "ADD_USER"
const REMOVE_USER ="REMOVE_USER"
const CHANGE_USER ="CHANGE_USER"
const PICKED_USER_ID ="PICKED_USER_ID"

export const addUser = (data) => ({
    type: ADD_USER,
    id: v4(),
    data: data
})

export const removeUser = (id) => ({
    type: REMOVE_USER,
    id
})

export const changeUser = (data) => ({
    type: CHANGE_USER,
    data
})

export const clearStore = () => ({
    type: CLEAR_STORE_USER,
})

export const pickedUserId = (id) => ({
    type: PICKED_USER_ID,
    id
})

const userInitialInfo = {
    users: [
    ],
    pickedUserId: ''
}

export function userInfo(state = userInitialInfo, action) {
    let error;
    switch(action.type) {
        case ADD_USER:
    
            return {...state,
                 users: [...state.users, {
                     ...action.data,
                     id: action.id
                 }]}
        case REMOVE_USER:
            return {...state,
                 users: state.users.filter(item => item.id !== action.id)}
        case CHANGE_USER:  
            return {
                ...state, 
                users: state.users.map(
                    item => item.id === action.data.id ? 
                    action.data : 
                    item
                ),
                pickedUserId: ''
            }
        case CLEAR_STORE_USER:
            return {...state, users: []}
        case PICKED_USER_ID:
            return {...state, pickedUserId: action.id}
        default:
            return state
    }
}
const userInfoCombiner = combineReducers({
    userInfo,
    validateUserInfo
  })

export default userInfoCombiner;
