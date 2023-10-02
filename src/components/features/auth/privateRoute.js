import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from '../../../hooks/useAuth'

const PrivataRoute = () => {
    const location = useLocation()
    const { username } = useAuth()
      console.log("username",username)
    const content = (
        username
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )

    return content
}
export default PrivataRoute