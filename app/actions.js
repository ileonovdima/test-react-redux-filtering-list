
export function setActiveLabels(index) {
  return { type: SET_ACTIVE_LABEL, index }
}

export function setDate(date) {
  return { type: SET_DATE, date }
}

export const ALL_NEWS = 'ALL_NEWS';
export const ALL_LABELS = 'ALL_LABELS';
export const SET_ACTIVE_LABEL = 'SET_ACTIVE_LABEL';
export const SET_DATE = 'SET_DATE';
