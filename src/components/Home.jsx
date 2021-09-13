import React, { Component } from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { loginUser, registerUser } from "../redux/userActions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.loggedinStatus === "LOGGED_IN" &&
      this.props.history.push("/dashboard");
  }

  componentDidUpdate() {
    this.props.loggedinStatus === "LOGGED_IN" &&
      this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedinStatus}</h1>
        <Registration handleRegister={this.props.registerUser} />
        <Login handleLogin={this.props.loginUser} />
      </div>
    );
  }
}

export default connect(null, { loginUser, registerUser })(Home);
