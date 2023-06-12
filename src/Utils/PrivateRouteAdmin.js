import {Outlet,Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRouteAdmin = () => {
    const admin=useSelector(state=>state.admin.admin)

    return(
        admin? <Outlet/>:<Navigate to='/admin'/>
    )
}

export default PrivateRouteAdmin
