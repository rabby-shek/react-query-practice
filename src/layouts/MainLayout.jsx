
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const MainLayout = () => {
  const navigate = useNavigate();
  const {logout} = useAuth();
  const handleLogout = () => {

    logout();
    navigate('/login');
  }
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/rq'>React Query</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <Outlet />
    </div>
  )
}

export default MainLayout
