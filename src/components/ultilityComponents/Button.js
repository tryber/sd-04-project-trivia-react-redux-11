import React from 'react';

const Button = ({ onClick, name, test, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      type="button"
      onClick={onClick}
      data-testid={test}
    >
      {name}
    </button>
  );
};

export default Button;
