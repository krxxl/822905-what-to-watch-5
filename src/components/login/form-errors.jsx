import React from 'react';
import PropTypes from "prop-types";

const FormErrors = ({formErrors}) => {
  return (
    <p>
      {formErrors}
    </p>
  );
};

FormErrors.propTypes = {
  formErrors: PropTypes.string.isRequired,
};

export default FormErrors;
