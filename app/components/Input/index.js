import React from 'react';
import styles from './styles.css';

function Input(props) {
  return (
    <input type={props.type} name={props.name} onChange={props.onChange} className={styles.text} value={props.value}/>
  );
}
export default Input;
