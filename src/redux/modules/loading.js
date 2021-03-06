import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'START_LOADING';
const FINISH_LOADING = 'FINISH_LOADING';

export const startLoading = createAction(START_LOADING, (reqType) => reqType);
export const finishLoading = createAction(FINISH_LOADING, (reqType) => reqType);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({ ...state, [action.payload]: true }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;
