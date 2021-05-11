import React from 'react';

import { NavBar, Sidebar } from 'components';

import Home from "components/pages/Home";
import { WebsiteContent } from './App.styles';
import GlobalStyle from 'styles/global';

const App: React.FC = () => {
  return (
    <>
        <GlobalStyle />
        <NavBar />
        <WebsiteContent>
          <Sidebar />
          <Home />
        </WebsiteContent>
    </>
  )
}

export default App;
