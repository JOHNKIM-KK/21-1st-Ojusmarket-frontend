import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import CartList from './Pages/CartList/CartList';
import ProductInfo from './Pages/ProductInfo/ProductInfo';
import Comments from './Pages/Comments/Comments';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/ingredients/:id" component={ProductInfo} />
          <Route exact path="/cartlist" component={CartList} />
          <Route exact path="/comments" component={Comments} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
