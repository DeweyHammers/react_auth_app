import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { checkForLogin } from "./redux/userActions";

class App extends Component {
  componentDidMount() {
    this.props.checkForLogin(this.props.loggedinStatus);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/"}
            render={(props) => (
              <Home {...props} loggedinStatus={this.props.loggedinStatus} />
            )}
          />
          <Route
            exact
            path={"/dashboard"}
            render={(props) => (
              <Dashboard
                {...props}
                loggedinStatus={this.props.loggedinStatus}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, loggedinStatus } = state;
  return { user, loggedinStatus };
};

export default connect(mapStateToProps, { checkForLogin })(App);
