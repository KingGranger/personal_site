import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Bio extends Component {

  backGround = () => {
  //  return  {background: url(`../${this.props.background}`)}
  }
  render(){
    console.log(this.props)

    return(
      <div className="Bio" >
        Hi! I am a New York City based growing software developer. I was born and raised in Harlem, NYC. In 2012 I graduated from one of NYC's spealized High schools Brookyn Technical HS.
        Later in 2016, I graduated Widener University with Bachelors of Arts in Psychology. Upon my graduation, I wanted to work in the field of Human Resources. After a few experiences in the field I quickly changed my mind.
        Fall of 2016 is when I learned about coding bootcamps and through their rigorous program one can change there career to become a software developer. I was immediately interested in this because I knew I liked working
        with computers and I knew I wanted to learn programming. Aside from that, I also had some ideas for some application that were not out that I could possibly create. Fully motivated, I started to teach myself the basics of
        Ruby, JavaScript, and basic computer science concepts from online resources. After about 7 months of part time working and studying object oriented programming, I applied to Flatiron's immersive fullstack web development program.
        Here I learned technologies such as Ruby on Rails, more advanced JavaScript, and React.js. I graduated from Flatiron School in January of 2018 and now I spend my time working on personal projects and looking to start my professional
        career as a React/JavaScript/Fullstack developer.
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {...state}
}

export default connect(mapStateToProps, actions)(Bio)
