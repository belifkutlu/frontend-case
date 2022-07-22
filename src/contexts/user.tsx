import * as React from "react";

type User = {
  email: string;
  password: string;
  locale: string;
};

type Action = {
  type: "setUser";
  user: User | null;
};

type State = {
  user: User | null;
};

const UserContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

function userReducer(state: State, action: Action) {
  switch (action.type) {
    case "setUser": {
      return { user: action.user };
    }
    default: {
      return state;
    }
  }
}

function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(userReducer, { user: null });
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    function getStoragetUser() {
      const user = localStorage.getItem("user");
      if (user) {
        dispatch({ type: "setUser", user: JSON.parse(user) });
      }
      setMounted(true);
    }

    getStoragetUser();
  }, []);

  if (!mounted) {
    return null;
  }

  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a userProvider");
  }
  return context;
}

export { UserProvider, useUser };
