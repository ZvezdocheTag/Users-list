import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'
import { withRouter } from 'react-router'
import Form from './Form'
import { clearStore, removeUser, changeUser, pickedUserId } from '../reducers'
import UserCard from './UserCard'
import Modal from 'react-modal'
import UserForm from './UserForm'

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

openModal(e) {
    e.preventDefault()
    this.setState({modalIsOpen: true});
}

closeModal() {
    this.setState({modalIsOpen: false});
}

handleRemoveUser(id, e) {
  e.preventDefault()
  this.props.dispatch(removeUser(id))
}

handleChangeUser(id, e) {
  e.preventDefault()
  this.props.dispatch(pickedUserId(id))
  this.setState({
    modalIsOpen: true
  })
}

handleClearUserStore() {
  this.props.dispatch(clearStore())
}

  render() {
    let { users, dispatch, pickedUserId } = this.props;

    return (
      <div className="App">
        {/* <button onClick={this.handleClearUserStore.bind(this)}>sssssss</button> */}
        <Form 
          prop={this.props} 
        />
        <ul className="users-list">
            {typeof users !== "undefined" ? 
              users.map((item, i) => (
                item === null ? <li key={i}/> :
                <UserCard 
                handleRemoveUser={this.handleRemoveUser.bind(this, item.id)}
                handleChangeUser={this.handleChangeUser.bind(this, item.id)}
                item={item}
                key={item.id}
                />
              )) :
              <li />
            }
        </ul>
        <Modal
                overlayClassName={{
                    base: 'body-overlay',
                    afterOpen: 'body-overlay--after-open',
                    beforeClose: 'body-overlay--before-close'
                }}
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
            <button onClick={this.closeModal}>close</button>
                <UserForm 
                dispatch={dispatch} 
                methodToDispatch={changeUser}
                userId={pickedUserId}
                />
            </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.userInfo,
    ...state.validateUserInfo
  }
}

export default withRouter(connect(mapStateToProps)(App));
