import Link from "next/link";
import { useRouter } from "next/router";

interface AsideNavigationProps {
  isOpen: boolean;
}

export const SmallDisplayNavigation = ({ isOpen }: AsideNavigationProps) => {
  const router = useRouter()
  if (!isOpen) return null;

  return (
    <div className="pt-3 block grid grid-cols-3 text-center mx-auto sm:hidden text-xs">
      <Link
        href="/recent"
        className={`p-2 m-2 border-4 border-gray-600 ${router.pathname == "/recent" ?
          "selected font-bold text-sky-500" : ""}`}>
        Recent
      </Link>
      <Link
        href="/register"
        className={`p-2 m-2 border-4 border-gray-600 ${router.pathname == "/register" ?
          "selected font-bold text-sky-500" : ""}`}>
        Register
      </Link>
      <Link
        href="/login"
        className={`p-2 m-2 border-4 border-gray-600 ${router.pathname == "/login" ?
          "selected font-bold text-sky-500" : ""}`}>
        Sign In
      </Link>
    </div>
  );
};