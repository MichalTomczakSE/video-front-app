interface LoginFromProps {
  createAccount: () => void;
}

export const LoginForm = ({ createAccount }: LoginFromProps) => {
  return (
    <div className="py-6 px-6 lg:px-8 text-left">
      <h3 className="mb-4 text-xl font-medium text-gray-900">
        Sign in to VideoDownloader!
      </h3>
      <form className="space-y-6">
        <div>
          <label htmlFor="email"
                 className="block mb-2 text-sm font-medium text-gray-900">
            Your email:
          </label>
          <input
            type="email"
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
          <a onClick={createAccount} className="text-blue-700 hover:underline">
            Create new account!
          </a>
        </div>
      </form>
    </div>
  );
};