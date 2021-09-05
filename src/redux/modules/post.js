import { createAction, handleActions } from 'redux-actions';
import createSagaRequest, {
  createRequestActionTypes,
} from '../../lib/createSagaRequest';
import * as postsAPI from '../../lib/api/posts';
import { takeLatest } from '@redux-saga/core/effects';

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] =
  createRequestActionTypes('post/READ_POST');

const UNLOAD_POST = 'post/UNLOAD_POST';

export const readPost = createAction(READ_POST, (id) => id);
export const unloadPost = createAction(UNLOAD_POST);

const readPostSaga = createSagaRequest(READ_POST, postsAPI.readPost);
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
  post: null,
  postError: null,
};

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({ ...state, post }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      postError: error,
    }),
    [UNLOAD_POST]: (state) => initialState,
  },
  initialState,
);

export default post;
