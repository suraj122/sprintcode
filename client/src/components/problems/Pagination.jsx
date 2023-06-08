function Pagination({ setProblems, problems }) {
  return (
    <div className="text-center mt-6">
      <button
        onClick={() => setProblems(problems[0])}
        className="px-3 py-1 border mr-4"
      >
        1
      </button>
      <button
        onClick={() => setProblems(problems[1])}
        className="px-3 py-1 border mr-4"
      >
        2
      </button>
    </div>
  );
}

export default Pagination;
