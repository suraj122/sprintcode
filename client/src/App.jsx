import Login from "./pages/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Problems from "./pages/Problems";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SingleProblem from "./components/problems/SingleProblem";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/problems/all" element={<Problems />} />
        <Route path="/problems/all/:problemId" element={<SingleProblem />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <Outlet />
    </>
  );
}

export default App;
