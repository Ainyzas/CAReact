import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function MathButton(props) {
  const { text, action, array } = props;

  const [buttonText, setButtonText] = useState(text);

  function buttonHandler() {
    setButtonText(`Answer is ${action(...array)}`);
  }

  return <button onClick={buttonHandler}>{buttonText}</button>;
}

MathButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
};
