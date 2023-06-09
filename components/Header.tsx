import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { SmallDisplayNavigation } from "@/components/SmallDisplayNavigation";
import { Modal } from "@/components/Modal";
import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";

export const Header = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false);

  const hideAllModals = () => {
    setShowLoginModal(false);
    setShowRegisterForm(false);
    setShowLoginForm(false);
  }
  const toggleUserForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(!showRegisterForm);
  }
  const handleMenuClick = () => {
  setShowNavigation(!showNavigation);
  }
  const router = useRouter();
  return (
    <>
    <header className="w-full max-w-screen-2xl bg-gray-300 px-2 py-4 mx-auto">
      <nav className="container flex justify-between items-center mx-auto">
        <Link href="/" className="font-bold sm:text-xl md:text-2xl mx-5">VideoDownloader</Link>
        <button onClick={() => handleMenuClick()}
          className="mr-10 block sm:hidden">
          <svg viewBox="0 0 100 90" width="30" height="30">
            <rect width="100" height="15"></rect>
            <rect y="35" width="100" height="15"></rect>
            <rect y="70" width="100" height="15"></rect>
            <rect y="70" width="100" height="15"></rect>
          </svg>
        </button>

        <div className="hidden sm:block mx-5 text-xs sm:text-sm md:text-base">
          <Link
            href="/recent"
            className={`px-4 ${router.pathname == "/recent" ?
              "selected font-bold text-sky-500" : ""}`}>
            Recent Videos
          </Link>
          <Link
            href="/register"
            className={`px-4 ${router.pathname == "/register" ?
              "selected font-bold text-sky-500" : ""}`}>
            Create Account
          </Link>
          <button
            className={`px-4`}
            onClick={() => {
              setShowLoginModal(true);
              setShowLoginForm(true);
            }}
          >
            Sign In
          </button>
          <Modal isOpen={showLoginModal} onClose={() => hideAllModals()}>
            {showLoginForm && <LoginForm
            createAccount={() => toggleUserForm()}/>}
            {showRegisterForm && <RegisterForm
            signIn={() => toggleUserForm()}/>}
          </Modal>
        </div>
      </nav>
    </header>
  <SmallDisplayNavigation
    isOpen={showNavigation}
  />
    </>
  );
};