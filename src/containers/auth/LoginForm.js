import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../redux/modules/auth';

const LoginForm = () => {
  const { form } = useSelector(({ auth }) => ({ form: auth.login }));
  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ form: 'login', key: name, value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);
  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
