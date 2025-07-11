import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/HomePage';
import AuthLayout from './components/AuthLayout';
import { Login, SignUp } from './components';
import AllPosts from './pages/AllPost';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import Post from './pages/Post';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
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

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
      {/* <RouterProvider router={router} /> */}
    </Provider>
  </React.StrictMode>,
)