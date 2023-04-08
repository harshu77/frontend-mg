import React from "react";
import { Route, Navigate, Outlet, Redirect } from "react-router-dom";
import { validateToken } from "../api/auth";

// function ProtectedRoute({ component: Component, ...restOfProps }) {
//   const [isAuthenticated, setIsAuthenticated] = React.useState(false);

//   React.useEffect(() => {
//     const validateFunction = async () => {
//       const validateTokenVariable = await validateToken();
//       console.log("TOKEN ", validateTokenVariable);
//       if (
//         Object.entries(validateTokenVariable.data.data).length > 0 &&
//         validateTokenVariable.status == 200
//       ) {
//         console.log("Authenticated true");
//         setIsAuthenticated(true);
//       }
//     };
//     validateFunction();
//   }, [isAuthenticated, Component]);

//   return isAuthenticated ? <Component /> : <Navigate to="/sign-up" />;
// }
const getAuth = async () => {
  try {
    const validateTokenVariable = await validateToken();
    console.log("VARIABLE ", validateTokenVariable);
    if (
      Object.entries(validateTokenVariable.data.data).length > 0 &&
      validateTokenVariable.status == 200
    ) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

function RequireAuth({ component: Component, ...rest }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async function () {
      console.log("Function Called");
      const authentication = await getAuth();
      setIsAuthenticated(authentication);
      setLoading(false);
    })();
  }, [isAuthenticated]);
  console.log(isAuthenticated);
  if (loading) {
    return (
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        Loading ...
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default RequireAuth;
