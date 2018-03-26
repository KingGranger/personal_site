import React, { Component } from 'react';
import Portrait from '../components/Portrait';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Name from '../components/Name';
import Me from '../img/me.jpg';

const Home = () => {

  return (
    <div className='Home'>
      <h1 className='Occupation'>Full Stack Engineer</h1>
      <Name />
      <img src={Me} style={{ width: `100%` }} alt='Me' className='HomePic' />
      <p className='Motto'>Creating one next generation application at a time! <br/> Contact me!</p>
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
