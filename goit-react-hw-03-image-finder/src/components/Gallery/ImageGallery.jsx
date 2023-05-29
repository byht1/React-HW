import React from 'react';
import PropTypes from 'prop-types';
import { List } from './gallery.styled';

function ImageGallery({ children, showBigImg }) {
  return <List onClick={showBigImg}>{children}</List>;
}

export default ImageGallery;

ImageGallery.propTypes = {
  showBigImg: PropTypes.func.isRequired,
};
