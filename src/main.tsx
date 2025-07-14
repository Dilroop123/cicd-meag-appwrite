import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { SignUpPage, LoginPage, AddPostPage, AllPostPage, EditPostPage, HomePage } from './pages';

// import Home from './pages/HomePage';
// import AuthLayout from './components/AuthLayout';
import { Header, Footer } from './components';
// import AllPosts from './pages/AllPostPage';
// import AddPost from './pages/AddPostPage';
// import EditPost from './pages/EditPostPage';
import Post from './pages/PostPage';
// import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ThemeContextProvider from './context/ThemeContextProvider';
import Sidebar from './components/sidebar/SideBar';


// const router = createBrowserRouter([

//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/login',
//         element: (
//           <Login />
//         )
//       },
//       {
//         path: "/signup",
//         element: (
//           <SignUp />
//         ),
//       },
//       {
//         path: "/all-posts",
//         element: (
//           <AuthLayout>
//             <AllPosts />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/add-post",
//         element: (
//           <AuthLayout>
//             <AddPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/edit-post/:slug",
//         element: (
//           <AuthLayout>
//             <EditPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/post/:slug",
//         element: <Post />,
//       },
//     ]
//   }
// ])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <ThemeContextProvider>
        <HashRouter>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/all-posts" element={<AllPostPage />} />
            <Route path="/add-post" element={<AddPostPage />} />
            <Route path='/edit-post/:slug' element={<EditPostPage />} />
            <Route path='/post/:slug' element={<Post />} />
          </Routes>
          <Footer />
        </HashRouter>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>,
)