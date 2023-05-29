import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { DivOverlay, DivModal } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.clickEscate);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickEscate);
  }

  clickEscate = event => {
    if (event.code !== 'Escape') {
      return;
    }
    this.props.hide();
  };

  clickOverlay = event => {
    if (event.target !== event.currentTarget) {
      return;
    }
    this.props.hide();
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <DivOverlay onClick={this.clickOverlay}>
        <DivModal>
          <img src={src} alt={alt} />
        </DivModal>
      </DivOverlay>,
      document.querySelector('#modal-root')
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  hide: PropTypes.func.isRequired,
};
