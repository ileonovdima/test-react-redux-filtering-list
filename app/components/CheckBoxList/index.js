import React from 'react';
import styles from './styles.css';

function CheckBoxList(props) {

  const content = props.items.map((item, index) => (
    <div key={`item-${index}`}>
      <label>{item.title}</label>
      <input type={'checkbox'} name={props.name} onChange={props.onChange} value={index} checked={!!item.active} />
    </div>
  ));

  return (
    <div className={styles.common}>
      {content}
    </div>
  );
}

export default CheckBoxList;
