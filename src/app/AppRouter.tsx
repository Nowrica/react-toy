import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Detail} from './pages/detail';
import {Home} from './pages/home';
import {Login} from './pages/common/Login';
import {Header} from './layout';
import {Profile} from './pages/common/Profile';

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading..,</div>;

  return (
    <BrowserRouter>
      <Header/>
      <hr />
      <Suspense fallback={<LoadingMessage/>}>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/profile" component={Profile} />
          <Route path="/detail/:id">
            <Detail/>
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
