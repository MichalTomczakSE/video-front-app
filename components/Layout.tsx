import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Header />
      Layout test
      <Footer />
    </>

  );
};