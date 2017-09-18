const VALIDATE_USER_NAME = "VALIDATE_USER_NAME"
const VALIDATE_USER_PHONE = "VALIDATE_USER_PHONE"
const VALIDATE_USER_ADRESS = "VALIDATE_USER_ADRESS"
const VALIDATE_USER_BDATE = "VALIDATE_USER_BDATE"
const SET_INVALIDATION_FIELD = "SET_INVALIDATION_FIELD"

export const setIvalidationField = (data) => ({
    type: SET_INVALIDATION_FIELD,
    data
})

export const validateUserName = (name) => ({
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

function validateUserInfo(state = {invalidFields: []}, action) {
    let error;

    switch(action.type) {
        case SET_INVALIDATION_FIELD:
            return {
                ...state,
                invalidFields: action.data
            }
        case VALIDATE_USER_NAME:
            return {...state, user: {
                ...state.user,
                name: action.name
            }}

        default:
            return state
    }
}

export default validateUserInfo;
