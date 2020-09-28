import React from 'react';
import Sidebar from './Sidebar';
import Jobs from './jobs';
import Learning from './learning';
import LandingPage from './LandingPage';
import Category from './category';
import Gists from './gists';
import Profile from './Profile';
import Performance from './Performance';
import TestData from './TestData';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
// import Performance from './Performance'
function Main() {
  return (
    <div className="main">
      <div>
          <Router>
            <aside>
                <Sidebar/>
            </aside>
            <div>
            <Switch>
                
                <Route path="/jobs">
                    <Jobs />
                </Route>
                <Route path="/learning">
                    <Learning />
                </Route>
                <Route path="/category">
                    <Category />
                </Route>
                <Route path="/gists">
                    <Gists />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/performance">
                    <Performance />
                </Route>
                <Route path="/testdata">
                    <TestData />
                </Route>
                <Route path="/">
                    <LandingPage />
                </Route>
            </Switch>
                
            </div>
          </Router>
      </div>
    </div>
  );
}

export default Main;
