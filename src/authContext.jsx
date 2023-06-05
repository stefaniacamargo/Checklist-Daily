import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./config/firebase";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
        setUser(user);
      } else {
        setIsAuth(false);
        setUser({});
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setIsAuth, setUser]);

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log("Error in logout", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
