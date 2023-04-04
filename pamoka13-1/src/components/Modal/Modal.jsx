import React from 'react';
import ReactDom from 'react-dom';

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  backgroundColor: 'white',
  border: '1px solid black',
  padding: '1rem',
};

const backgroundStyle = {
  position: 'fixed',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
};

export default function Modal({ children, isOpen, close }) {
  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div style={backgroundStyle} onClick={close}></div>
      <div style={modalStyle}>
        <button onClick={close}>Close</button>
        {children}
      </div>
    </>,
    document.getElementById('modal'),
  );
}
