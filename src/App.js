import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';
import Faukemon from './components/Faukemon'
import LitHop from './components/LitHop'
import HatPics from './components/HatPics'
import Bio from './components/Bio'
import { Message, Button } from 'semantic-ui-react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from './components/Home'

class App extends Component {


  render() {
    console.log('app props', this.props)
    return (
      <div className="App">


        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Bio' component={Bio}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {...state}
}

export default withRouter(connect(mapStateToProps, actions)(App));
