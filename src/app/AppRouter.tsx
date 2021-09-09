import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Detail} from './pages/detail';
import {Home} from './pages/home';

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading..,</div>;

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingMessage/>}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
