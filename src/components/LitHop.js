import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LitHop extends Component {

  render(){

    return (

        <div className='LitHop'>
          <div className='Technologies'>
            <ul> <h3>Built with</h3>
              <li>React.js</li>
              <li>Ruby on rails</li>
              <li>PostgreSQL</li>
              <li>Google Maps</li>
              <li>Semantic UI</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>
      
    )
  }
}

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps, actions)(LitHop);
