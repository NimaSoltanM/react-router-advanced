import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            خانه
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/products'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            محصولات
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
