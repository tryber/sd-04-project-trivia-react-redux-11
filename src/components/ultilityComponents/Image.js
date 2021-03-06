import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, width, test }) => (
  <img data-testid={test} src={src} alt={alt} width={width} />
);

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
};
