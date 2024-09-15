import s from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li>
            <Link to='/'><a href="" className={s.nav__list__link}>Home</a></Link>
          </li>

          <li>
            <Link to='/products'><a href="" className={s.nav__list__link}>Products</a></Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar