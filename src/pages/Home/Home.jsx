import css from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to your phone book</h1>
      <Link to="/login" className={css.titleLog}>
        Login pleace
      </Link>
    </div>
  );
}
