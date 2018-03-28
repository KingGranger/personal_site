import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { List, Image } from 'semantic-ui-react';
import JsIcon from '../img/JS_Icon.jpg';
import RubyIcon from '../img/Ruby_Icon.png';
import PostgreSQL from '../img/postgreSQL_Logo.png';
import HtmlCss from '../img/Html5_Css3.png';

class Faukemon extends Component {

  render(){

    return (
        <div className='Faukemon'>
          <div className='Technologies'>
            <h2 className='ProjectName'>Faukemon</h2>
              <List>
                <List.Item>
                  <Image avatar src={JsIcon}/>
                  <List.Content>
                    <List.Header as='h3'>JavaScript</List.Header>
                    <List.Description>Pokemon Battle Simulator</List.Description>
                    <List.Description>JavaScript powers the battle AI and game animations</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={RubyIcon}/>
                  <List.Content>
                    <List.Header as='h3'>Ruby on Rails</List.Header>
                    <List.Description>Produced with a Ruby on Rails backend Application Programming Inteface</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={PostgreSQL}/>
                  <List.Content>
                    <List.Header as='h3'>PostgreSQL</List.Header>
                    <List.Description>Utilizes active record methods to create a PostgreSQL database</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={HtmlCss}/>
                  <List.Content>
                    <List.Header as='h3'>HTML5/CSS3</List.Header>
                    <List.Description>Uses the HTML/CSS framework of Bootstrap for UI and canvas for game animation</List.Description>
                  </List.Content>
                </List.Item>
              </List>
          </div>
        </div>

    )
  }
}

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps, actions)(Faukemon);
