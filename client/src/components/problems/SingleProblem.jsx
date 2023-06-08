import { useParams } from "react-router-dom";
import problems from "../../data/problems.json";

function SingleProblem() {
  const params = useParams();
  let problemSets = [];
  problems.forEach((problem) =>
    problem.forEach((item) => problemSets.push(item))
  );

  const problem = problemSets.find(
    (problem) => problem.id === params.problemId
  );
  return (
    <div>
      <aside className="bg-gray-300 p-8">
        <h1 className="text-2xl ">{problem.title}</h1>
        <span className="bg-blue-200 p-2 px-3 rounded-3xl inline-block mt-2 text-sm">
          {problem.difficulty}
        </span>
        <p className="text-md mt-6">{problem.explanation}</p>
      </aside>
    </div>
  );
}

export default SingleProblem;
