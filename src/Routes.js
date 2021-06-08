import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
