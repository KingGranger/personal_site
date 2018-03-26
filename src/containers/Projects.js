import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Faukemon from '../components/Faukemon'
import LitHop from '../components/LitHop'
import HatPics from '../components/HatPics'
import { Tab } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';

const panes = [{menuItem: 'Lit Hop', render: () => <Tab.Pane className='Tab'><LitHop/></Tab.Pane>}]
const the = document.getElementsByClassName("slides");

class Project extends Component {


  render(){
    console.log('elements I want',the)
    return (
      <Carousel showIndicators={false}>
        <div>
          <LitHop />
          
        </div>
        <div>
          <Faukemon />
        </div>
      </Carousel>
    )
  }
};

export default Project;

// state = {
//   slideIndex: 1
// }
//
// componentDidMount(){
//   this.showDivs(this.state.slideIndex)
// }
//
// plusDivs = n => {
//   this.setState({slideIndex: this.state.slideIndex += n})
//   this.showDivs(this.state.slideIndex += n);
// }
//
// showDivs = (n) => {
// var i;
// var x = document.getElementsByClassName("slides");
// if (n > x.length) {this.state.slideIndex = 1}
// if (n < 1) {this.state.slideIndex = x.length}
// for (i = 0; i < x.length; i++) {
//    x[i].style.display = "none";
// }
// x[this.state.slideIndex-1].style.display = "block";
// }
