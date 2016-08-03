import React, { Component } from 'react';
import styles from './styles.css';

import Input from '../../components/Input';
import CheckBoxList from '../../components/CheckBoxList';

export default class FilterPanel extends Component {

  render() {
    return (
      <div className={styles.common}>
        <Input type={'date'} onChange={this.props.onDateChange} value={this.props.date}/>
        <CheckBoxList items={this.props.labels} name={'labels'} onChange={this.props.onLabelChange}/>
      </div>
    )
  }
}
