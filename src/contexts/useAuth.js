import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async ({ email, password }) => {
    setLoading(true);
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/kidsloop-test/accounts/sign-in",
        requestOptions
      );
      const data = await response.json();
      setLoading(false);
      setAuth(data);
      return data;
    } catch (err) {
      setLoading(false);
      console.error(err);
      return {};
    }
  };

  return (
    <AuthContext.Provider value={{ auth, loading, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
