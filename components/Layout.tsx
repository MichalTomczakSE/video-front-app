import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex grow">
        {children}
      </div>
      <Footer />
    </div>

  );
};