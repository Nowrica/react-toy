import React, {useCallback, useEffect, useState} from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {Detail} from './pages/detail';
import {Home} from './pages/home';
import {Header} from './layout';
import {useDispatch, useSelector} from 'react-redux';
import {clearMessage} from './actions/message';
import {logout} from './actions/auth';
import EventBus from './common/EventBus';
import {history} from './helpers/history';
import Login from './pages/common/Login';
import Profile from './pages/common/Profile';

export default function AppRouter() {
  const [, setShowModeratorBoard] = useState(false);
  const [, setShowAdminBoard] = useState(false);

  const {user: currentUser} = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on('logout', () => {
      logOut();
    });

    return () => {
      EventBus.remove('logout');
    };
  }, [currentUser, logOut]);


  return (
    <Router history={history}>
      <Header/>
      <hr/>
      <Switch>
        <Route exact path={['/', '/home']} component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={Profile}/>
        <Route path="/detail/:id">
          <Detail/>
        </Route>
      </Switch>
    </Router>
  );
}
