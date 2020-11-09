import React from 'react';
import {Link} from "react-router-dom";
import {AuthorizationStatus} from '../../constant/constant';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

const Header = (props) => {
  const {className, Breadcrumbs, name, filmId} = props;
  const signIn = props.authorizationStatus === AuthorizationStatus.NO_AUTH ? (
    <div className="user-block">
      <Link to="/login" href="sign-in.html" className="user-block__link">
        Sign in
      </Link>
    </div>
  ) : (
    <div className="user-block">
      <div className="user-block__avatar">
        <Link to="/mylist">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </Link>
      </div>
    </div>
  );

  const title = props.title ? (
    <h1 className="page-title user-page__title">{props.title}</h1>
  ) : null;

  return (
    <header className={`page-header movie-card__head ${className || ``}`}>
      <div className="logo">
        <Link className="logo__link" to="/">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {Breadcrumbs && <Breadcrumbs name={name} filmId={filmId}/>}
      {title}
      {signIn}

    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  filmId: PropTypes.number,
  name: PropTypes.string,
  Breadcrumbs: PropTypes.element,
  title: PropTypes.string,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

export {Header};
export default connect(mapStateToProps, null)(Header);
