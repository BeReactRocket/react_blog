import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/modules/user';
import Header from '../base/Header';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
