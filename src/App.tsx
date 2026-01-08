import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage';
import { ProtectedLayout } from './layouts/ProtectedLayout';
import { AuthProvider } from './context/AuthContext';
import { CalendarPage } from './pages/CalendarPage';

const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />
  }
];

const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <CalendarPage />,
      },
    ],
  },
];

const router = createBrowserRouter([...publicRoutes, ...protectedRoutes]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
