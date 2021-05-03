import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  return (
    <div>
      {!isAuthenticated && (
        <div>
          <button onClick={() => loginWithRedirect()}>Login Button</button>
        </div>
      )}
      {isAuthenticated && (
        <div>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
          hi {user.name}
        </div>
      )}
    </div>
  );
};
export default LoginButton;
