import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Main from './Pages/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
