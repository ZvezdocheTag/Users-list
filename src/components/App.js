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

    
  }

  handleChangeUser() {

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
        <Form prop={this.props}/>
        <ul>
            {
              users.map((item, i) => (
                item === null ? <li key={i}/> :
                <li key={i}>
                    <Link 
                    to={`/${item.name}`}  
                    filter={item.name}
                    >
                      {item.name}
                    </Link>
                  <div className="controls">
                    <a href="#" 
                    className="controls--remove" 
                    onClick={this.handleRemoveUser.bind(this, item.id)}> - Cross - </a>
                    <a href="" 
                    className="controls--change" 
                    onClick={this.handleChangeUser}> - change - </a>
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
