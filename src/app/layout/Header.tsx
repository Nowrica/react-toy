import React, {useCallback, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../actions/auth';
import EventBus from '../common/EventBus';

export default function Header() {
  const {user: currentUser} = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on('logout', () => {
      logOut();
    });

    return () => {
      EventBus.remove('logout');
    };
  }, [currentUser, logOut]);
  return (
    <header>
      <Link to="/">
        <button>Home</button>
      </Link>
      {!currentUser ?
        (<Link to="/login">
          <button>login</button>
        </Link>) :
        (<Link to="/login" onClick={logOut}>
          <button> Logout</button>
        </Link>)
      }
      <Link to="/profile">
        <button>profile</button>
      </Link>
      <Link to="/detail">
        <button>detail</button>
      </Link>
    </header>
  )
}
