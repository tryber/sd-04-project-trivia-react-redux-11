import React from 'react';

const Input = ({ onChange, test, name }) => {
  return <input name={name} data-testid={test} onChange={onChange} />;
};

export default Input;
