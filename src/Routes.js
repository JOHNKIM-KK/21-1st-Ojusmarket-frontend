import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          {/* <Route exact path="/login" component={login} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
