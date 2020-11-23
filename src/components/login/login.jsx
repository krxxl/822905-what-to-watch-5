import React, {useState} from "react";
import Header from '../header/header';
import Footer from '../footer/footer';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import FormErrors from '../form-errors/form-errors';
import {REG_EXP_MAIL} from '../../constant/constant';
import {extend} from '../../utils';


const Login = (props) => {
  const [inputs, setInput] = useState({
    email: ``,
    password: ``,
  });
  const {email, password} = inputs;
  const [formErrors, setFormErrors] = useState(``);
  const [emailValid, setEmailVaild] = useState(true);
  const [formValid, setFormValid] = useState(false);
  const handleSubmit = (evt) => {
    const {onSubmit} = props;

    evt.preventDefault();

    onSubmit({
      email,
      password,
    });
  };

  const handleUserInput = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setInput(extend(inputs, {
      [name]: value
    }));
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = formErrors;
    let isEmailValid = emailValid;
    switch (fieldName) {
      case `email`:
        isEmailValid = value.match(REG_EXP_MAIL);
        fieldValidationErrors = isEmailValid ? `` : `Please enter a valid email address`;
        break;
    }
    setFormErrors(fieldValidationErrors);
    setEmailVaild(isEmailValid);
    validateForm();
  };

  const validateForm = () => {
    setFormValid(emailValid);
  };

  const classError = emailValid ? `` : `sign-in__field--error`;
  return (
    <div className="user-page">
      <Header className={`user-page__head`}/>
      <div className="sign-in user-page__content">
        <form onSubmit={handleSubmit} action="#" className="sign-in__form">
          <div className="sign-in__message">
            <FormErrors formErrors={formErrors}/>
          </div>
          <div className="sign-in__fields">
            <div className={`sign-in__field ${classError}`}>
              <input
                onChange={handleUserInput}
                className= "sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                onChange={handleUserInput}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button disabled={!formValid} className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {Login};
export default connect(null, mapDispatchToProps)(Login);
