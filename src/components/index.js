
//This is your top level React component, you may change everything

import React from 'react'
import io from "socket.io-client";
import Header from "./Header/Header";
import SideMenu from "./SideMenu/SideMenu";
import ChatArea from './ChatArea/ChatArea';
import Aux from "../utils/Aux";


class App extends React.PureComponent {

  state = {
    chatMessage: ''
  }



  componentDidMount() {
    this.initiateConnection();
  }

  //initiates chat message
  initiateConnection = () => {

    //connecting to Socket.IO chat server
    const socket = io("https://spotim-demo-chat-server.herokuapp.com");
    socket.on("connect", () => {
      console.log("connected to chat server!");
      this.setState({
        socket: socket
      })
    });
    socket.on("disconnect", () => {
      console.log("disconnected from chat server!");
      this.setState({
        socket: null
      });
    });

    socket.on("spotim/chat", (resp) => {
      console.log(resp.message);
    });

  }


  changeHandler = (e) => {
    this.setState({
      chatMessage: e.target.value
    });
  }

  submitMessage = (e) => {
    this.state.socket.emit('spotim/chat', {
      message: this.state.chatMessage,
      name: 'Johnny',
      avatar: "DOG PIC"
    })
  }

  render() {
    return (
      <Aux>
        <Header />

        <div className='main-content'>
          <SideMenu />
          <ChatArea />
        </div>

      </Aux>
    )
  }
}

export default App;
