import { ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <main>{children}</main>
      <Footer />
    </div>
  );
}