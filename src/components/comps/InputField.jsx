import React from 'react';

const styles = {
  Input: {
    top: '131px',
    left: '46px',
    width: '285px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '2px',
    boxShadow: '2px 2px 4px rgba(3,3,3,0.1)',
    backgroundColor: '#ffffff',
    color: '#a9a9a9',
    fontSize: '14px',
    fontFamily: 'Roboto',
    lineHeight: '19px',
    outline: 'none',
  },
};

const defaultProps = {
  text: 'Input',
};

const InputField = (props) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField;