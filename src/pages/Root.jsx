import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import "./Root.css"
function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className="content">
      <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
