import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import { logout } from '../../redux/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService?.logout().then(() => {
            dispatch(logout());
        });

    }

    return (
        <div>
            <button style={{ border: 'none', padding: '5px' }} onClick={logoutHandler}>Log out</button>
        </div>
    )
}

export default LogoutBtn