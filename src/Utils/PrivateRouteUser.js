import {Outlet,Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRouteUser = ()=>{
    const user=useSelector(state=>state.user.user)
    return(
        user? <Outlet/>:<Navigate to ='/login'/>
    )
}

export default PrivateRouteUser