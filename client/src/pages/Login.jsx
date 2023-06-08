function Login() {
  return (
    <div className="flex justify-center items-center bg-gray-100 h-[calc(100vh-4rem)]">
      <form
        className="max-w-lg w-full mx-auto p-8 rounded bg-gray-600"
        action=""
      >
        <legend className="text-3xl font-bold text-center">Login</legend>
        <fieldset className="mt-6">
          <input
            className="block w-full bg-transparent border outline-none py-2 px-4 rounded my-4"
            type="email"
            placeholder="Email"
          />
          <input
            className="block w-full bg-transparent border outline-none py-2 px-4 rounded my-4"
            type="password"
            placeholder="Password"
          />
          <div className="text-center">
            <button className="py-4 px-6 bg-blue-300 inline-block rounded cursor-pointer text-xl font-medium">
              Login
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
