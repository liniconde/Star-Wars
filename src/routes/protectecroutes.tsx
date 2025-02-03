import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../features/auth/store/user";

export function Protectecroutes() {
  const { isLogin } = useUser((state) => state);
  return isLogin ? <Outlet /> : <Navigate to={"login"} replace />;
}
