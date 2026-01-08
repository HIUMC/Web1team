// layouts/AppLayout.tsx
import { Outlet } from 'react-router-dom'
import { Header } from '../components/common/Header'

export const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
