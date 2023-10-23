import React from 'react';
import PropTypes from 'prop-types';
import './styles/styles.css'; 

const Button = ({ label, onClick, isActive }) => {
  const buttonClass = isActive ? 'active' : 'inactive';

  return (
    <button className={`button ${buttonClass}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

export default Button;