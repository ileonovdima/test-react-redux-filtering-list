import React from 'react';

import styles from './styles.css';

function ListItem(props) {
  let itemLabel;

  const labelsContent = props.item.labels.map((item, index) => {
    itemLabel = props.labels.find((itemLabels) =>  itemLabels.id === item);
    return <span className={styles.bordered}  key={`item-${index}`}> {itemLabel.title} </span>
  });

  return (
    <div className={styles.common}>
      <b>
        {props.item.title}
      </b>
      <div>
        {props.item.text}
      </div>
      <i>
        {props.item.date}
      </i>
      <div>
        {labelsContent}
      </div>
    </div>
  );
}

export default ListItem;
