import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../redux/userActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.loggedinStatus === "NOT_LOGGED_IN" &&
      this.props.history.push("/");
  }

  handleLogout = () => {
    this.props.history.push("/");
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <div>
          <h1>Dashboard</h1>
          <h1>Status: {this.props.loggedinStatus}</h1>
          <button onClick={() => this.handleLogout()}>Loggout</button>
        </div>
      </div>
    );
  }
}

export default connect(null, { logoutUser })(Dashboard);
