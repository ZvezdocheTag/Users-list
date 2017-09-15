import React, { Component } from 'react'
import { addUser } from '../reducers'
import Modal from 'react-modal'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  
// regex.test(ctrl.value)
function validationType(action) {
    switch(action) {
        case "phone":
            return action.match(/^(\+[0-9]{1,3}|0)[0-9]{3}( ){0,1}[0-9]{7,8}\b/g)
        case "adress":
        case "city":
        case "name":
            return action.match(/^[a-zA-Z ]{2,100}$/)
        case "bdate":
            return action.match(/[^a-z ]\ *([.0-9])*\d/)
        default:
            null
    }
}
function validateForm(data) {
    if(typeof data === 'object') {
        for(let key in data) {
            console.log(key, data[key])
        }
    }
}

export default class Form extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
    e.preventDefault()
        let { dispatch } = this.props.prop;
        let { name, bdate, adress, phone, city } = this;
        let data = {
            name: name.value, 
            bdate: bdate.value, 
            city: city.value, 
            adress: adress.value, 
            phone: phone.value
        }
        validateForm(data)
        dispatch(addUser(data))
    }
    
  render() {
      let { props } = this;
    return (
        <div>
            <button onClick={props.openModal}>OPEN MODAL</button>
            <form action="" onSubmit={this.handleSubmit}>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" ref={(name) => this.name = name}/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" ref={(bdate) => this.bdate = bdate}/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" ref={(adress) => this.adress = adress}/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" ref={(city) => this.city = city}/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" ref={(phone) => this.phone = phone}/>
            </fieldset>
            <button type="submit">add item</button>
            </form>
            <Modal
                overlayClassName={{
                    base: 'body-overlay',
                    afterOpen: 'body-overlay--after-open',
                    beforeClose: 'body-overlay--before-close'
                }}
                isOpen={props.modalState}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
            <button onClick={this.closeModal}>close</button>
            <form action="" onSubmit={this.handleSubmit}>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" ref={(name) => this.name = name}/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" ref={(bdate) => this.bdate = bdate}/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" ref={(adress) => this.adress = adress}/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" ref={(city) => this.city = city}/>
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" ref={(phone) => this.phone = phone}/>
            </fieldset>
            <button type="submit">add item</button>
            </form>
            </Modal>
        </div>
    )
  }
}
