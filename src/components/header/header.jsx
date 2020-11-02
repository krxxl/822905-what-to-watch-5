import React from 'react';
import {Link} from "react-router-dom";
import {AuthorizationStatus} from '../../constant/constant';
import {connect} from 'react-redux';

const Header = ({authorizationStatus}) => {
  const signIn = authorizationStatus === AuthorizationStatus.NO_AUTH ? (
    <div className="user-block">
        <Link to="/login" href="sign-in.html" className="user-block__link">
          Sign in
        </Link>
      </div>
  ) : (
    <div className="user-block">
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </div>
  )

  return (
    <header className="page-header">
      <div className="logo">
        <Link className="logo__link" to="/">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {signIn}

    </header>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

export {Header};
export default connect(mapStateToProps, null)(Header);
