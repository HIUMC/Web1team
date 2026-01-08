import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { HomeLayout } from './layouts/HomeLayout';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
