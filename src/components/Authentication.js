import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { UserContext } from "../context/user";

function Authentication({ history, children, loading }) {
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      history.push("/");
    }
    if (!user) {
      history.push("/login");
    }
  }, [user, history]);
  if (loading) return null;
  return <>{children}</>;
}

export default withRouter(Authentication);
