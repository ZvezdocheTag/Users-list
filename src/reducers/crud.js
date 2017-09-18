import { v4 } from 'node-uuid'

const ADD_USER = "ADD_USER"
const REMOVE_USER ="REMOVE_USER"
const CHANGE_USER ="CHANGE_USER"

export const addUser = (data) => ({
    type: ADD_USER,
    id: v4(),
    data
})
export const removeUser = (id) => ({
    type: REMOVE_USER,
    id
})
export const changeUser = ({ id, data} ) => ({
    type: CHANGE_USER,
    data: data,
    id: id
})

const userInitialInfo = {
    users: [
    ],
}

function userInfo(state = userInitialInfo, action) {
    let error;
    switch(action.type) {
        case ADD_USER:
            return {...state,
                 users: [...state.users, action.user]}
        case REMOVE_USER:
            return {...state,
                 users: state.users.filter(item => item.id !== action.id)}
        case CHANGE_USER:
            return {...state,
                 users: 
                    state.users.map(item => 
                        item.id === action.id ? action.data : item)
                }
        default:
            return state
    }
}

export default userInfo;
