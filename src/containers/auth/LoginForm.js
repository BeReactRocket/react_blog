import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';

import { changeField, initializeForm, login } from '../../redux/modules/auth';
import { check } from '../../redux/modules/user';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ form: 'login', key: name, value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(login({ ...form }));
  };
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('Error occurred in Log In.');
      console.log(authError);
      setError('Error occurred in Log In.');
      return;
    }

    if (auth) {
      console.log('Log In Success!');
      console.log(auth);
      dispatch(check());
    }
  }, [authError, auth, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);
  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);
