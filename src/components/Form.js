import React, { Component } from 'react'
import { addUser } from '../reducers'


export default class Form extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
    e.preventDefault()
    
    let { dispatch } = this.props.prop;
    let { name, bdate, adress, phone } = this;
    dispatch(addUser({
        name: name.value, 
        bdate: bdate.value, 
        adress: adress.value, 
        phone: phone.value
    }))

    }
    
  render() {
    return (
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
            <input type="text" ref={(phone) => this.phone = phone}/>
          </fieldset>
          <button type="submit">add item</button>
        </form>
    )
  }
}
