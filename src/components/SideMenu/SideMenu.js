import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SideMenu.css';


class SideMenu extends Component {

  state = {
    displayInput: false
  }

  displayHandler = (displayInput) => {
    this.setState({
      displayInput
    })
  }

  keyPressedHandler = (e) => {
    if (e.key === 'Enter') {
      this.displayHandler(false);
    }
  }

  render() {
    const classes = ['SideMenu'];

    if (this.props.isOpen) {
      classes.push('open');
    }

    const display = {};

    if (!this.props.userName) {
      display['display'] = 'none';
    }

    let nameLabel = (
      <h4
        className="SideMenuName"
        onClick={
          () => this.displayHandler(true)
        }>{this.props.userName}</h4>
    );

    if (this.state.displayInput) {
      nameLabel = <input
        type='text'
        placeholder="Enter New Name"
        onChange={(e) => this.props.updateUser(e.target.value)}
        onKeyPress={this.keyPressedHandler}
        onBlur={ () => this.displayHandler(false)}/>
    }

    return (
      <div className={classes.join(" ")}>
        {nameLabel}
        <p style={display}>( Click your name to change it )</p>
      </div>
    )
  }
}

const mapStateToProps = ({ userName }) => {
  return {
    userName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (userName) => dispatch({ type: 'CREATE_USER', userName })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
