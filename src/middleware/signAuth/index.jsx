import { useState } from "react";
import { Navigate } from "react-router-dom";

// Create a Authenication Hook
export const RequireAuth = ({ children }) => {
  const userIsLogged = getLoginStatus(); // Your hook to get login status

  // if you are not signed in then return to signup page
  if (!userIsLogged) {
    return <Navigate to="/signup" />;
  }

  // else return the page you went to
  return children;
};

// Create User logged Hook
export function getLoginStatus() {
  const [user, setUser] = useState(false);

  // Function to change user to true when signed in

  return user;
}
