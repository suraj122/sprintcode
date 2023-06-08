import { useState } from "react";
import Pagination from "../components/problems/Pagination";
import RenderProblems from "../components/problems/RenderProblems";
import problemsData from "../data/problems.json";

function Problems() {
  const [problems, setProblems] = useState(problemsData[0]);
  return (
    <div className="w-full max-w-3xl mx-auto mt-12">
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Acceptance</th>
            <th className="border px-4 py-2">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, i) => (
            <RenderProblems key={i} problem={problem} />
          ))}
        </tbody>
      </table>
      <Pagination setProblems={setProblems} problems={problemsData} />
    </div>
  );
}

export default Problems;
