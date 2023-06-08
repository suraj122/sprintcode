import { Link } from "react-router-dom";

function RenderProblems({ problem }) {
  return (
    <>
      <tr>
        <td className="border px-4 py-2">
          <Link to={`/problems/all/${problem.id}`}>{problem.title}</Link>
        </td>
        <td className="border px-4 py-2">{problem.difficulty}</td>
        <td className="border px-4 py-2">{problem.acceptance}</td>
      </tr>
    </>
  );
}

export default RenderProblems;
