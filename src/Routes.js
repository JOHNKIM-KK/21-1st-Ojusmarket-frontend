import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import CartList from './Pages/CartList/CartList';
import ProductInfo from './Pages/ProductInfo/ProductInfo';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cartlist" component={CartList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
