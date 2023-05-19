import Sidebar from '../../../components/admin/Sidebar/Sidebar'
import '../Dashboard/Dashboard.css'
import UserContainer from '../../../components/admin/container/UserContainer'
import AdminUserData from '../../../components/admin/UserData/AdminUserData'


function Users() {

    return (
        <div className="Dashboard">
      
        <div className='Inner-dashboard'>
          <Sidebar/>
          <div className='main-dash'>
          <AdminUserData/>
          </div>
        </div>
    </div>
      
    )
}

export default Users