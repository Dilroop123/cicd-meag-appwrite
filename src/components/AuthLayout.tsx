import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function AuthLayout({ children }: any) {
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

    useEffect(() => {
        if (isAuthenticated == false) {
            navigate('/login')
        }
        setLoader(false);
    }, [isAuthenticated, navigate])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default AuthLayout