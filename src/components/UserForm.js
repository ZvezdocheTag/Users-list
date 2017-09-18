import React, { Component } from 'react'
import { setIvalidationField, validateUserName } from '../reducers/validation'


function validationType(action) {
    switch(action.key) {
        case "phone":
            return action.value.match(/^(\+[0-9]{1,3}|0)[0-9]{3}( ){0,1}[0-9]{7,8}\b/g)
        case "adress":
        case "city":
        case "name":
            return action.value.match(/^[a-zA-Z ]{2,100}$/)
        case "bdate":
            return action.value.match(/([.0-9])*\d/)
        default:
            null
    }
}
function validateForm(data) {
    let invalid = []
    if(typeof data === 'object') {
        for(let key in data) {
            if(validationType({key, value: data[key]}) === null) {
                invalid.push(key)
            }
        }
    }
    console.log(invalid)
    return invalid;
}

export default class UserForm extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let { dispatch, methodToDispatch, userId } = this.props;
        let { name, bdate, adress, phone, city } = this;
        let data = {
            name: name.value, 
            bdate: bdate.value, 
            city: city.value, 
            adress: adress.value, 
            phone: phone.value,
            id: userId
        }
      
        if(validateForm(data).length === 0) {
            dispatch(methodToDispatch(data))
            dispatch(setIvalidationField([]))
        } else {
            dispatch(setIvalidationField(validateForm(data)))
        }
    }

    checkInvalidElement(tag) {
        console.log(this.props.invalidFields, this.props.invalidFields.indexOf(tag))
        return this.props.invalidFields.indexOf(tag) === -1 ?
            '' :
            'invalid'
    }

    removeInvalidDecor(e) {
        console.log(e.target.classList.contains('invalid'))
        if(e.target.classList.contains('invalid')) {
            e.target.classList.remove('invalid')
        }
    }

    render() {
        console.log(this.name)
        return (
        <form action="" className="user-form" onSubmit={this.handleSubmit}>
            <fieldset >
                <label htmlFor="">Name</label>
                <input 
                onFocus={this.removeInvalidDecor}
                className={`user-form__field ${this.checkInvalidElement("name")}`}
                type="text" ref={(name) => this.name = name}/>
            </fieldset>
            <fieldset >
                <label htmlFor="">Date of birth</label>
                <input 
                onFocus={this.removeInvalidDecor}
                className={`user-form__field ${this.checkInvalidElement("bdate")}`}
                type="text" ref={(bdate) => this.bdate = bdate}/>
            </fieldset>
            <fieldset >
                <label htmlFor="">Adress</label>
                <input 
                onFocus={this.removeInvalidDecor}

                className={`user-form__field ${this.checkInvalidElement("adress")}`}
                type="text" ref={(adress) => this.adress = adress}/>
            </fieldset>
            <fieldset >
                <label htmlFor="">City</label>
                <input 
                onFocus={this.removeInvalidDecor}
                className={`user-form__field ${this.checkInvalidElement("city")}`}
                type="text" ref={(city) => this.city = city}/>
            </fieldset>
            <fieldset >
                <label htmlFor="">Phone</label>
                <input 
                onFocus={this.removeInvalidDecor}
                className={`user-form__field ${this.checkInvalidElement("phone")}`}
                type="text" ref={(phone) => this.phone = phone}/>
            </fieldset>
            <button type="submit">add item</button>
            </form>
        )
    }
}
