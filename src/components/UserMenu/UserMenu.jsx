import { useDispatch } from 'react-redux';
import { logOut } from 'reduxs/auth/operations';
import { useAuth } from 'hooks';
import { FcButtingIn } from 'react-icons/fc';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <FcButtingIn size={'1.5em'} />
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        className={css.logOut}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
