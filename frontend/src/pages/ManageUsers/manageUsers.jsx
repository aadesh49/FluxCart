import UserForm from '../../components/UserForm/userForm';
import UserList from '../../components/UserList/userList';
import './ManageUsers.css'
const ManageUsers = () => {
    return (
        <div className="users-container text-light">
            <div className="left-column">
                <UserForm />
            </div>
            <div className="right-column">
                <UserList />
            </div>
        </div>
    )
}

export default ManageUsers;