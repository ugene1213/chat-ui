import React, { Component } from 'react';
import {Container, Image} from 'semantic-ui-react';
import logo from '../../assets/spotim-logo.jpg';
import styled from 'styled-components';
import './Header.css';

const Logo = styled.div`
      img{
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
      }

`;


class Header extends Component {
  render() {
    // return <Container className={'spotim-header'}>
    //   <div className={'spotim-title'}>
    //     Welcome to the Spot.IM Chat app
    //   </div>
    //   <div>
    //     <Logo>
    //       <Image size={'tiny'} src={logo}/>
    //     </Logo>
    //
    //     <textarea onChange="" value=""></textarea>
    //     <button onClick="">send</button>
    //
    //   </div>
    // </Container>
    return (
      <div className='Header'>
        <Logo>
          <Image size={'tiny'} src={logo}/>
        </Logo>
      </div>
    )
  }
}

export default Header;
