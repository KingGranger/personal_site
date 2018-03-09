import React, { Component } from 'react';
import Portrait from '../components/Portrait';
import { Button, Icon } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className='Home'>
      <div className='portrait'/>
      <div className='LinkedInButton'>
        <Button color='linkedin' size='massive'>
          <Link to='www.google.com'/>
          <Icon name='linkedin'></Icon>
        </Button>
      </div>
      <div className='GithubButton'>
        <Button size='massive'>
          <Icon name='github'></Icon>
        </Button>
      </div>
      <div className='TwitterButton' >
        <Button color='twitter' size='massive'>
          <Icon name='twitter'></Icon>
        </Button>
      </div>
    </div>
  )
};

export default Home;
