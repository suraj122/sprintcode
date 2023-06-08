import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-blue-100 flex justify-center gap-x-4 py-4 text-xl">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/problems/all">Problems</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
