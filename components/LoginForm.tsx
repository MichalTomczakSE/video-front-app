import { ChangeEvent, FormEvent, useState } from "react";
import { Loader } from "@/components/Loader";

interface LoginFromProps {
  createAccount: () => void;
}
interface FormValues {
  username: string;
  password: string;
}

export const LoginForm = ({ createAccount }: LoginFromProps) => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormValues>({ username: "", password: "" });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    setIsLoading(false)
    console.log(data);
  }


    return (
      <>
       <div className="py-6 px-6 lg:px-8 text-left">

          {isloading && <div className="text-center">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Signing in to VideoDownloader!
            </h3>
            <Loader/>
          </div>}

         {!isloading &&
        <form
          className="space-y-6"
        onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email"
                   className="block mb-2 text-sm font-medium text-gray-900">
              Your email:
            </label>
            <input
              type="email"
              name="username"
              id="username"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="JohnyDoe@video.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password"
                   className="block mb-2 text-sm font-medium text-gray-900">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required />

            <a href="#" className="text-sm text-blue-700 hover:underline">
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Login to your account!
          </button>
          <div className="text-sm font-medium text-gray-500">
            Not registered?{" "}
            <a onClick={createAccount} className=" cursor-pointer text-blue-700 hover:underline">
              Create new account!
            </a>
          </div>
        </form>
         }
      </div>
        </>
    );
  };