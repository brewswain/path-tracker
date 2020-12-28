import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../contexts/auth.context";

const ResolveAuth = () => {
  const { tryLocalSignin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};

export default ResolveAuth;
