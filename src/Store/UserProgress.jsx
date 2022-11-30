import { createContext, useState } from "react";

export const UserProgress = createContext();
export const StateProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <UserProgress.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserProgress.Provider>
  );
};
