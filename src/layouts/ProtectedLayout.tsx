import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components/common/Header";
import SideBar from "../components/common/SideBar";
import { Footer } from "../components/common/Footer";
import { useAuth } from "../context/AuthContext";

export const ProtectedLayout = () => {
  const { isLogin } = useAuth();

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
          <Header />
    
          <div className="flex flex-1">
            <SideBar />
            <main className="flex-1 flex flex-col items-center gap-[120px]">
              <Outlet />
            </main>
          </div>
    
          <Footer />
        </div>
  );
};
