import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register, login
    key, // username, password, passwordConfirm
    value, // newValue
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
);

export default auth;
