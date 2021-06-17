import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Main from './Pages/Main/Main';
import RecipeInfo from './Pages/RecipeInfo/RecipeInfo';
import CartList from './Pages/CartList/CartList';
import ProductInfo from './Pages/ProductInfo/ProductInfo';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/recipeinfo/:id" component={RecipeInfo} />
          <Route exact path="/ingredients/:id" component={ProductInfo} />
          <Route exact path="/cartlist" component={CartList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
