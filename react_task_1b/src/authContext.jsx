import React, { useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //TODO
      localStorage.setItem("user", JSON.stringify(action.payload));
      const { email, password, token, role } = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        user: { email: email, password: password },
        token: token,
        role: role,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "LOGOUT",
    });
    window.location.href = "/" + role + "/login";
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  React.useEffect(() => {
    //TODO
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
