import { Link, Outlet } from "react-router-dom"

const LinkLayout = () => {
  return (
    <div>
        <Link to={'/'}>Main Page</Link>
        <Link to={'/about'}>About Jhin</Link>

        <Outlet />
    </div>
  )
}

export default LinkLayout