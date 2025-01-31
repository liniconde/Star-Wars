import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>

      <main className="flex flex-grow justify-center">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
