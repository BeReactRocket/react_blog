import { check, tempSetUser } from '../redux/modules/user';
import store from '../redux/store';

export default function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return; // Do nothing when user is not logged in
    store.dispatch(tempSetUser(JSON.parse(user)));
    store.dispatch(check());
  } catch (error) {
    console.error(error);
  }
}
