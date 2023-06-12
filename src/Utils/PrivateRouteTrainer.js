import {Outlet,Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRouteTrainer = () => {
    const trainer=useSelector(state=>state.trainer.trainer)

    return(
        trainer? <Outlet/>:<Navigate to='/trainer/login'/>
    )
}

export default PrivateRouteTrainer