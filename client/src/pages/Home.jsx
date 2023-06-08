import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center bg-gray-100 h-[calc(100vh-4rem)]">
      <div>
        <h1 className="text-4xl font-bold">Welcome to Leetcode</h1>

        <nav className="flex justify-center items-center mt-8 gap-x-4">
          <Link
            className="py-4 px-6 bg-blue-300 inline-block rounded cursor-pointer"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="py-4 px-6 bg-blue-300 inline-block rounded cursor-pointer"
            to="/signup"
          >
            Signup
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Home;
