import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HatPics extends Component {

  render(){

    return (
      <div className='HatPics'>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps, actions)(HatPics);