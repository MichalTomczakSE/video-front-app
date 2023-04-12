import { ChangeEvent, FormEvent, useState } from "react";
import { Loader } from "@/components/Loader";

interface RegisterFormProps {
  signIn: () => void;
}

interface FormValues {
  name: string;
  username: string;
  password: string;
}

type authStatus = "anonymous" | "registered" | "failed";


export const RegisterForm = ({ signIn }: RegisterFormProps) => {
  const [formData, setFormData] = useState<FormValues>({ name: "", username: "", password: "" });
  const [statusMessage, setStatusMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userStatus, setUserStatus] = useState<authStatus>("anonymous");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);


    const res = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
      credentials: "include"

    });
    const data = await res.json();

    if (data.message) {
      setUserStatus("failed");
      setStatusMessage(data.message);
    } else {
      setStatusMessage(data.username);
      setUserStatus("registered");
    }
    setIsLoading(false);
  };


return (
  <>
    {isLoading && <Loader/>}
    {userStatus === 'registered' &&
      <div>
        <p className="p-4 text-green-400 text-center text-xl font-bold">
          Account for {statusMessage} created successfully!</p>
        <a
          onClick={signIn}
          className="cursor-pointer block w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
         Sign in now!
        </a>
      </div>}

    {!isLoading && userStatus !== 'registered' &&
      <div className="py-6 px-6 lg:px-8 text-left">
    <h3 className="mb-4 text-xl font-medium text-gray-900">
      Create new Account
    </h3>
    <form
      onSubmit={handleSubmit}
      className="space-y-4">
      <div>
        <label htmlFor="name"
               className="block mb-2 text-sm font-medium text-gray-900">
          Your name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Johny"
          required
        />
      </div>
      <div>
        <label htmlFor="email"
               className="block mb-2 text-sm font-medium text-gray-900">
          Your email address:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
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
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Register new account!
      </button>
      <a
        onClick={signIn}
        className="cursor-pointer block w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Return to sign in!
      </a>

    </form>
  </div>
  }
    {userStatus === 'failed' &&  <div>
      <p className="text-red-400 text-center text-xl font-bold">{statusMessage}</p>
    </div>}
  </>

);
}