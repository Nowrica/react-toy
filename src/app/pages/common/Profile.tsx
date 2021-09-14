import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Profile = () => {
  const {user: currentUser} = useSelector((state: any) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login"/>;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>Profile</strong>
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken}
      </p>
      <p>
        <strong>email:</strong> {currentUser.sub}
      </p>
      <p>
        <strong>role:</strong> {currentUser.auth}
      </p>
    </div>
  );
};

export default Profile;
