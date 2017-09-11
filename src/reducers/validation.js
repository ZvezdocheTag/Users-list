const VALIDATE_USER_NAME = "VALIDATE_USER_NAME"
const VALIDATE_USER_PHONE = "VALIDATE_USER_PHONE"
const VALIDATE_USER_ADRESS = "VALIDATE_USER_ADRESS"
const VALIDATE_USER_BDATE = "VALIDATE_USER_BDATE"

const validateUserName = (name) => ({
    type: VALIDATE_USER_NAME,
    name
})
const validateUserPhone = (phone) => ({
    type: VALIDATE_USER_NAME,
    phone
})
const validateUserAdress = (adress) => ({
    type: VALIDATE_USER_NAME,
    adress
})
const validateUserBdate = (bdate) => ({
    type: VALIDATE_USER_NAME,
    bdate
})

function validateUserInfo(state = {}, action) {
    let error;
    switch(action.type) {
        case VALIDATE_USER_NAME:
            return {...state, user: {
                ...state.user,
                name: action.name
            }}
        case VALIDATE_USER_PHONE:
            return {...state, user: {
                ...state.user,
                phone: action.phone
            }}
        case VALIDATE_USER_ADRESS:
            return {...state, user: {
                ...state.user,
                adress: action.adress
            }}
        case VALIDATE_USER_BDATE:
            return {...state, user: {
                ...state.user,
                bdate: action.bdate
            }}
        default:
            return state
    }
}
