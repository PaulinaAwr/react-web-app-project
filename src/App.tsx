import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { NavBar, Sidebar } from 'components';

import Home from "components/pages/Home/Home";
import { WebsiteContent } from './App.styles';
import GlobalStyle from 'styles/global';

const App: React.FC = () => {
  return (
    <Router>
        <GlobalStyle />
        <NavBar />
        <WebsiteContent>
          <Sidebar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </WebsiteContent>
    </Router>
  )
}

export default App;
