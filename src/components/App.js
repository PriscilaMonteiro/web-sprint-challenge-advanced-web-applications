import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Login from './Login';
import Logout from './Logout';

const App = () => {
  return (
    <Router>
      <AppContainer>
        <LambdaHeader/>
        <Header/>
        <RouteContainer>
          <Switch>
            <PrivateRoute path="/view" component={View}/>

            <PrivateRoute path="/logout" component={Logout}/>

            <Route path="/login">
              <Login/>
            </Route>

            <Route exact path="/">
              <Login/>
            </Route>   
            
          </Switch>       
        </RouteContainer>
      </AppContainer>
    </Router>
  )
}

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'
// ### Basic Routing

// > _Build the needed utilities to restrict access to private routes._

// - [ ] Build a `Route` component that renders rendering `Login.js` to the path `/`.
// - [ ] Build a `Route` component that renders rendering `Login.js` to the path `/login`.
// - [ ] Build a `Route` component that renders rendering `View.js` to the path `/view`.
// - [ ] Build a `Route` component that renders rendering `Logout.js` to the path `/logout`.


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
