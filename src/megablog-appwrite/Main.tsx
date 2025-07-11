import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Megablock from './Megablock';
import Home from './pages/HomePage';
import AuthLayout from './components/AuthLayout';
import { Login, SignUp } from './components';
import AllPosts from './pages/AllPost';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import Post from './pages/Post';

function Main() {


    const router = createBrowserRouter([

        {
            path: '/',
            element: <Megablock />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/login',
                    element: (
                        <Login />
                    )
                },
                {
                    path: "/signup",
                    element: (
                        <SignUp />
                    ),
                },
                {
                    path: "/all-posts",
                    element: (
                        <AuthLayout>
                            <AllPosts />
                        </AuthLayout>
                    ),
                },
                {
                    path: "/add-post",
                    element: (
                        <AuthLayout>
                            <AddPost />
                        </AuthLayout>
                    ),
                },
                {
                    path: "/edit-post/:slug",
                    element: (
                        <AuthLayout>
                            <EditPost />
                        </AuthLayout>
                    ),
                },
                {
                    path: "/post/:slug",
                    element: <Post />,
                },
            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    );
};

export default Main;