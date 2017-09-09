import { v4 } from 'node-uuid'

const ADD_USER_NAME = "ADD_USER_NAME"
const ADD_USER_PHONE = "ADD_USER_PHONE"
const ADD_USER_ADRESS = "ADD_USER_ADRESS"
const ADD_USER_BDATE = "ADD_USER_BDATE"
const ADD_USER = "ADD_USER"

export const addUser = (user) => ({
    type: ADD_USER,
    id: v4(),
    user: user
})
const addUserName = (name) => ({
    type: ADD_USER_NAME,
    name
})
const addUserPhone = (phone) => ({
    type: ADD_USER_NAME,
    phone
})
const addUserAdress = (adress) => ({
    type: ADD_USER_NAME,
    adress
})
const addUserBdate = (bdate) => ({
    type: ADD_USER_NAME,
    bdate
})

const userInitialInfo = {
    users: [
        {
            id: null,
            name: '',
            bdate: '',
            adress: '',
            phone: null
        }
    ],
}

function userInfo(state = userInitialInfo, action) {
    let error;
    switch(action.type) {
        case ADD_USER_NAME:
            return {...state, user: {
                ...state.user,
                name: action.name
            }}
        case ADD_USER_PHONE:
            return {...state, user: {
                ...state.user,
                phone: action.phone
            }}
        case ADD_USER_ADRESS:
            return {...state, user: {
                ...state.user,
                adress: action.adress
            }}
        case ADD_USER_BDATE:
            return {...state, user: {
                ...state.user,
                bdate: action.bdate
            }}
        case ADD_USER:
            console.log(action, state)
            return {...state,
                 users: [...state.users, action.user]}
        default:
            return state
    }
}

export default userInfo;
