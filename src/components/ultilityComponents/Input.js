import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, test, name }) => (
  <input name={name} data-testid={test} onChange={onChange} />
);

export default Input;

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
};
