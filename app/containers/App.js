import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { setActiveLabels, setDate } from '../actions';

import styles from './styles.css';

import NewsItem from '../components/NewsItem';
import NewsList from '../components/NewsList';

import FilterPanel from '../containers/FilterPanel';


class App extends Component {

  render() {
    const { visibleNews, labels, date } = this.props;

    return (
      <div className={styles.wrapper}>
        <FilterPanel labels={labels} date={date} onLabelChange={this.onLabelChange.bind(this)} onDateChange={this.onDateChange.bind(this)}/>
        <NewsList items={visibleNews} component={NewsItem} labels={labels}/>
      </div>
    )
  }

  onLabelChange(e) {
    const dispatch = this.props.dispatch;
    const index = e.currentTarget.value;
    dispatch(setActiveLabels(+index));
  }

  onDateChange(e) {
    const dispatch = this.props.dispatch;
    const date = e.currentTarget.value;
    dispatch(setDate(date));
  }
}

function selectNews(news, labels, date) {

  const activeLabels = labels.filter((item) => !!item.active);

  return news.filter((item, index) => {
    return (activeLabels.every((label) => {
      return item.labels.some((itemLabel) => itemLabel === label.id);
    }) && item.date === date);
  });

}

function select(state) {
  return {
    visibleNews: selectNews(state.news, state.labels, state.date),
    labels: state.labels,
    date: state.date
  }
}

export default connect(select)(App);
