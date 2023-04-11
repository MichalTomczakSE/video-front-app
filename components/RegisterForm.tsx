interface RegisterFormProps {
  signIn: () => void;
}

export const RegisterForm = ({signIn}:RegisterFormProps) => {
  return (
    <div className="py-6 px-6 lg:px-8 text-left">
      <h3 className="mb-4 text-xl font-medium text-gray-900">
        Create new Account
      </h3>
      <form className="space-y-6">
        <div>
          <label htmlFor="email"
                 className="block mb-2 text-sm font-medium text-gray-900">
            Your email address:
          </label>
          <input
            type="text"
            name="username"
            id="username"
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
  )
}