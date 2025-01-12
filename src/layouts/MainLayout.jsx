
import { NavLink, Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/rq'>React Query</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default MainLayout
