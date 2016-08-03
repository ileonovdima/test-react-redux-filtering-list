import React from 'react';

import styles from './styles.css';

function List(props) {
  const ComponentToRender = props.component;

  const content = props.items.map((item, index) => (
    <ComponentToRender key={`item-${index}`} item={item} mods={props.mods} labels={props.labels} />
  ));

  return (
    <ul className={styles[props.mods]}>
      {content}
    </ul>
  );
}

export default List;
