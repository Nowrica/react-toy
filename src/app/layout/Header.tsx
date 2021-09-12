import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/login">
        <button>login</button>
      </Link>
      <Link to="/profile">
        <button>profile</button>
      </Link>
    </header>
  )
}
