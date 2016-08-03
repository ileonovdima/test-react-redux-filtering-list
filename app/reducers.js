import { combineReducers } from 'redux';
import { ALL_NEWS, ALL_LABELS, SET_ACTIVE_LABEL, SET_DATE } from './actions';

const initialState = {
  news: [{
    labels: [1, 2, 3],
    title: 'The single',
    text: 'The single source of truth is a basic',
    date: '2016-08-03'
  }, {
    labels: [2, 1, 4],
    title: 'To illustrate',
    text: 'To illustrate the problem let me take an example',
    date: '2016-08-03'
  },{
    labels: [2, 3, 4],
    title: 'To model',
    text: 'To model this situation',
    date: '2016-08-03'
  },{
    labels: [2, 4],
    title: 'But',
    text: 'But the most interesting parts',
    date: '2016-08-02'
  },{
    labels: [3, 1],
    title: 'They',
    text: 'They also set a lot of sta',
    date: '2016-08-01'
  }],
  labels: [{
    id: 1,
    title: 'new',
    active: false
  }, {
    id: 2,
    title: 'hot',
    active: false
  }, {
    id: 3,
    title: 'top',
    active: false
  }, {
    id: 4,
    title: 'cool',
    active: false
  }],
  date: '2016-08-03'
}

function date(state = initialState.date, action) {
  switch (action.type) {
  case SET_DATE:
    return state = action.date;
  default:
    return state;
  }
}

function labels(state = initialState.labels, action){
  switch (action.type) {
  case SET_ACTIVE_LABEL:
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], {
        active: !state[action.index].active
      }),
      ...state.slice(action.index + 1)
    ];
  default:
    return state;
  }
}

function news(state = initialState.news, action) {
  switch (action.type) {
  case ALL_NEWS:
    return state;
  default:
    return state;
  }
}

const newsApp = combineReducers({
  news,
  labels,
  date
});

export default newsApp;
