import React, {PureComponent} from "react";
import Header from '../header/header';
import Footer from '../footer/footer';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import FormErrors from './form-errors';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: ``,
      password: ``,
      formErrors: ``,
      emailValid: true,
      formValid: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      email: this.state.email,
      password: this.state.password,
    });
  }

  handleUserInput(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({[name]: value},
        () => {
          this.validateField(name, value);
        });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    // let passwordValid = this.state.passwordValid;
    switch (fieldName) {
      case `email`:
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors = emailValid ? `` : `Please enter a valid email address`;
        break;
        // case 'password':
        //   passwordValid = value.length >= 6;
        //   fieldValidationErrors = passwordValid ? '': ' is too short';
        //   break;
        // default:
        //   break;
    }
    this.setState({formErrors: fieldValidationErrors, emailValid}, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid});
  }


  render() {
    const classError = this.state.emailValid ? `` : `sign-in__field--error`;
    return (
      <div className="user-page">
        <Header className={`user-page__head`}/>
        <div className="sign-in user-page__content">
          <form onSubmit={this.handleSubmit} action="#" className="sign-in__form">
            <div className="sign-in__message">
              <FormErrors formErrors={this.state.formErrors}/>
            </div>
            <div className="sign-in__fields">
              <div className={`sign-in__field ${classError}`}>
                <input
                  onChange={this.handleUserInput}
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
                  // ref={this.passwordRef}
                  onChange={this.handleUserInput}
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
              <button disabled={!this.state.formValid} className="sign-in__btn" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   errorStatus: state.USER.errorStatus,
// });

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {Login};
export default connect(null, mapDispatchToProps)(Login);
