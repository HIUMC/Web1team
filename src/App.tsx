import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ProtectedLayout } from './layouts/ProtectedLayout';
import { HomeLayout } from './layouts/HomeLayout';

const publicRoustes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <HomePage/> },
      { path: "login", element: <LoginPage/> },
    ]
  }
];

const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
    ],
  },
];
const router = createBrowserRouter([...publicRoustes, ...protectedRoutes]);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
