import { RegisterForm } from "@/components/RegisterForm";
import Link from "next/link";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  return (
    <div className="mx-auto">
      <RegisterForm signIn={() => router.push('/login')}/>
    </div>
  );
};

export default Register;