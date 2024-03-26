import React from 'react';
import InputField from '../comps/InputField'

const styles = {
  Card: {
    marginTop: '120px',
    marginBottom: '120px',
    width: '80%',
    height: '450px',
    backgroundColor: '#ffffff',
    borderRadius: '2px',
    boxShadow: '2px 0px 10px rgba(3,3,3,0.1)',
  },
  Text: {
    marginTop: '20px',
    color: '#000000',
    fontSize: '24px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    lineHeight: '31px',
    textAlign: 'center',
  },
};


const Card = (props) => {
  return (
    <div style={styles.Card}>
      <p style={styles.Text}>Создать контент</p>
      <InputField>Модель</InputField>
    </div>
  );
};

export default Card;