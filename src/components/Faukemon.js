import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Faukemon extends Component {

  render(){

    return (

        <div className='Faukemon'>
          <div className='Technologies'>

          </div>
        </div>

    )
  }
}

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps, actions)(Faukemon);
