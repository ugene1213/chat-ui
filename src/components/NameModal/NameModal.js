import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from "../../utils/Aux";
import BlackOut from "../UI/BlackOut";
import './NameModal.css'


class NameModal extends Component {

  state = {
    enteredName: '',
    error: ''
  }


  submitName = () => {
    if (this.state.enteredName.trim() === "") {
      this.setState({
        error: 'Please enter a username.'
      });
    } else {
      this.props.createUser(this.state.enteredName);
    }
  }


  render() {

    let modal = (
      <Aux>
        <BlackOut isOpen={this.props.userName === ""} close={() => {}} />
        <div className="NameModal">
          <p> Before we begin, please enter a user name</p>
          <p className="Error">{this.state.error}</p>
          <input
            className="NameInput"
            value={this.state.enteredName}
            onChange={(e) => {
              this.setState({ enteredName: e.target.value });
            }}  />
          <button onClick={this.submitName}>GO</button>
        </div>
      </Aux>
    );

    if (this.props.userName) {
      modal = <div></div>;
    }

    return modal;
  }
}

const mapStateToProps = ({ userName }) => {
  return {
    userName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (userName) => dispatch({ type: 'CREATE_USER', userName })
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameModal);
