import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { addUser } from '../reducers'
import {
  Link
} from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    let { dispatch } = this.props;
    let { name, bdate, adress, phone } = this;

    dispatch(addUser({
      name: name.value, 
      bdate: bdate.value, 
      adress: adress.value, 
      phone: phone.value
    }))

  }

  render() {
    let { users } = this.props;

    console.log(this, "STORE")
    return (
      <div className="App">
        <h1>SOME</h1>
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
        <ul>
            {
              users.map((item, i) => (
                  <li key={i}>
                    <Link 
                    to={`/${item.name}`}  
                    filter={item.name}
                    >
                      {item.name}
                    </Link>
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
