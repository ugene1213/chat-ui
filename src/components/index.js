
//This is your top level React component, you may change everything
import React from 'react';
import Header from "./Header/Header";
import SideMenu from "./SideMenu/SideMenu";
import ChatArea from './ChatArea/ChatArea';
import Aux from "../utils/Aux";
import BlackOut from "./UI/BlackOut";
import { connect } from 'react-redux';
import NameModal from './NameModal/NameModal';


class App extends React.PureComponent {

  state = {
    menuOpen: false
  }

  toggleSideDrawer = (toggle) => {
    this.setState({
      menuOpen: toggle
    })
  }


  render() {
    return (
      <Aux>
        <NameModal />
        <Header openSideDrawer={() => this.toggleSideDrawer(true)} />
        <BlackOut
          close={() => this.toggleSideDrawer(false)}
          isOpen={this.state.menuOpen}/>
        <div className='main-content'>
          <SideMenu isOpen={this.state.menuOpen} />
          <ChatArea />
        </div>

      </Aux>
    )
  }
}

const mapStateToProps = ({ userName }) => {
  return {
    userName
  };
}
export default App;
