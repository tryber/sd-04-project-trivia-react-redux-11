import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, onClick, name, test, isDisabled }) => (
  <button
    className={className}
    disabled={isDisabled}
    type="button"
    onClick={onClick}
    data-testid={test}
  >
    {name}
  </button>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};
