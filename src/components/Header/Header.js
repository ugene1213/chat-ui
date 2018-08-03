import React, { Component } from 'react';
import {Container, Image} from 'semantic-ui-react';
import logo from '../../assets/spotim-logo.jpg';
import BurgerButton from '../UI/BurgerButton'
import './Header.css';


class Header extends Component {
  render() {

    return (
      <div className='Header'>
        <BurgerButton clicked={this.props.openSideDrawer} />
        <div style={{ margin: '0 auto'}}>
          <Image size={'tiny'} src={logo}/>
        </div>
      </div>
    )
  }
}

export default Header;
