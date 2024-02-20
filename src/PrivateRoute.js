import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoute = ({ element: Element, ...rest }) => {
  const navigate = useNavigate()
  return (
    <>
      isLoggedIn ? <Element {...rest} /> : <Navigate to='/login' replace />
    </>
  )
}
export default PrivateRoute
