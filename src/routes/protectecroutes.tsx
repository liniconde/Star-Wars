import { Navigate, Outlet } from "react-router-dom";

export function Protectecroutes() {
  //logica si esta logueado mueste lo que esta abajo, si no manda a  home

  const islogin = true;

  return islogin ? <Outlet /> : <Navigate to={"/"} replace />;
}
