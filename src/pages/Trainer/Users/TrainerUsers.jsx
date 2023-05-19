import AdminUserData from '../../../components/admin/UserData/AdminUserData'
import TrainerSidebar from '../Sidebar/TrainerSidebar'
import '../../../pages/Admin/Dashboard/Dashboard.css'
import TrainerUserData from '../../../components/Trainer/TrainerUserData/TrainerUserData'

function TrainerUsers() {

    return (
        <div className="Dashboard">
      
        <div className='Inner-dashboard'>
            <TrainerSidebar/>
          <div className='main-dash'>
          <TrainerUserData/>
          </div>
        </div>
       
    </div>
      
    )
}
export default TrainerUsers
