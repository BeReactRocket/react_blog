import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../redux/modules/auth';

const RegisterForm = () => {
  const { form } = useSelector(({ auth }) => ({ form: auth.register }));
  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
