import { useEffect, useState } from "react";

const useProtectedRoute = () => {
  const [userData] = useState(JSON.parse(localStorage.getItem("user")));
  const [isUser, setIsUser] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    if (userData != null) {
      if (userData.role === "user") {
        setIsUser(true);
        setIsAdmin(false);
      } else {
        setIsUser(false);
        setIsAdmin(true);
      }
    } else {
      setIsAdmin(false);
      setIsUser(false);
    }
  }, []);

  return [isUser, isAdmin, userData];
};

export default useProtectedRoute;
