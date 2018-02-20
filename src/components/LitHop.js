import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LitHop extends Component {

  render(){

    return (
      <div className='LitHop'>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps, actions)(LitHop);
