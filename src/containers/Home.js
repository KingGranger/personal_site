import React, { Component } from 'react';
import Portrait from '../components/Portrait';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <div className='Home'>
      <div className='portrait'/>
      <img src='../me.jpg'/>
      <div className='LinkedInButton'>
        <a href="https://www.linkedin.com/in/brandon-harris-62338611a/">
          <Button color='linkedin' size='massive'>
            <Icon name='linkedin'></Icon>
          </Button>
        </a>
      </div>
      <div className='GithubButton'>
        <a href="https://github.com/KingGranger">
          <Button size='massive'>
            <Icon name='github'></Icon>
          </Button>
      </a>
      </div>
      <div className='TwitterButton' >
        <a href='https://twitter.com/BTH_Goes_Live'>
          <Button color='twitter' size='massive'>
            <Icon name='twitter'></Icon>
          </Button>
        </a>
      </div>
    </div>
  )
};

export default Home;
