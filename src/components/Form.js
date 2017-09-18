import React, { Component } from 'react'
import { addUser } from '../reducers'
import UserForm from './UserForm'

export default class Form extends Component {
  render() {
      let { dispatch, invalidFields } = this.props.prop;
      let { props } = this;
    return (
        <div>
            <UserForm 
                dispatch={dispatch} 
                methodToDispatch={addUser} 
                invalidFields={invalidFields}
            />
        </div>
    )
  }
}

