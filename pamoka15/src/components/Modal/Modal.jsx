import React from 'react';
import ReactDom from 'react-dom';

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  color: 'white',
  backgroundColor: 'black',
  textAlign: 'center',
  borderRadius: '10%',
  padding: '1em',
};

const backgroundStyles = {
  position: 'fixed',
  backgroundColor: 'rgba(0,0,0,0.5)',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
};

export default function Modal({ name, email, phone, address, isOpen, handleClose }) {
  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div className="modal" style={backgroundStyles} onClick={handleClose}></div>
      <div className="modal-content" style={modalStyle}>
        <h2>
          <i>{name}</i> user's info :
        </h2>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Address:</strong> {`${address.street}, ${address.suite}`}
        </p>
        <button onClick={handleClose}>Close</button>
      </div>
    </>,
    document.getElementById('modal'),
  );
}
