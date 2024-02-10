/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay
      style={{ background: 'hsla(0, 100%, 100%, 0.9)', zIndex: 1000, position: 'relative' }}
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <DialogContent
        aria-label="menu"
        style={{ boxShadow: '0px 10px 50px hsla(0, 0%, 0%, 0.33)' }}
      >
        <button onClick={onDismiss}>Dismiss menu</button>
        <nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </nav>
        <footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </footer>
      </DialogContent>
    </DialogOverlay>
  );
};

export default MobileMenu;
