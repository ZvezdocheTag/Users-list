import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'
import { withRouter } from 'react-router'
import Form from './Form'
import { clearStore, removeUser } from '../reducers'

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({modalIsOpen: true});
}

closeModal() {
    this.setState({modalIsOpen: false});
}

  handleRemoveUser(id, e) {
    this.props.dispatch(removeUser(id))
  }

  handleClearUserStore() {
    this.props.dispatch(clearStore())
  }

  render() {
    let { users } = this.props;
    console.log(users)
    return (
      <div className="App">
        <h1 onClick={this.handleClearUserStore.bind(this)}>SOME</h1>
        <Form 
        prop={this.props} 
        openModal={this.openModal} 
        closeModal={this.closeModal}
        modalState={this.state.modalIsOpen}
        />
        <ul>
            {
              users.map((item, i) => (
                item === null ? <li key={i}/> :
                <li key={i} className="user">
                    <div className="user__name">{item.name}</div>
                    <div className="user__bdate">{item.bdate}</div>
                    <div className="user__adress">{item.adress}</div>
                    <div className="user__phone">{item.phone}</div>
                  <div className="controls">
                    <a href="#" 
                    className="controls--remove" 
                    onClick={this.handleRemoveUser.bind(this, item.id)}> - X - </a>
                    <a href="" 
                    className="controls--change" 
                    onClick={this.openModal}> - change - </a>
                  </div>
                  </li>
                
              ))
            }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default withRouter(connect(mapStateToProps)(App));
