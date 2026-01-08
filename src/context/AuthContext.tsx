import { createContext, useContext, useEffect, useState } from "react";

type User = {
  nickname: string;
};

type AuthContextType = {
  user: User | null;
  isLogin: boolean;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("auth");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed.user);
    }
  }, []);

  const login = (user: User) => {
    setUser(user);
    sessionStorage.setItem(
      "auth",
      JSON.stringify({
        user,
        isLogin: true,
      })
    );
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogin: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

