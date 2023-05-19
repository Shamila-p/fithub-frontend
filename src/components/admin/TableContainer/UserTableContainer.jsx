import React from 'react'
import UserTable from '../Tables/UserTable.jsx'
import { useNavigate } from 'react-router-dom'

function UserTableContainer() {

  const navigate = useNavigate()

  return (
        <div class="Table-Container">
          <div>
            <button onClick={() => navigate("/admin/users/add")}>+ Add User</button>
          </div>
          hii
            {/* <UserTable/> */}
        </div>
  )
}

export default UserTableContainer
