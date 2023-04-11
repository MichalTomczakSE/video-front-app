import { LoginForm } from "@/components/LoginForm";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  return (
    <LoginForm createAccount={() => router.push('/register')}/>
  )
}

export default LoginPage;