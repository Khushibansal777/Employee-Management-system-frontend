import React from "react";
import { useState } from "react";
const FailedTask = ({ data, task_numbers }) => {
  const [isFailed, setIsFailed] = useState(false);
  const handleFailedClick = () => {
    setIsFailed(true); // Disable button after click
    task_numbers.failed += 1;
    console.log(task_numbers);
  };

  return (
    <div className="flex-shrink-0 bg-yellow-400 h-full w-[350px] rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
          {" "}
          {data.task_category}
        </h3>
        <h4 className="text-sm">{data.task_date}</h4>
      </div>
      <h2 className="text-2xl font-semibold mt-5"> {data.task_title}</h2>
      <p className="text-sm mt-2">{data.task_description}</p>
      <div className="mt-4">
        <button
          className={`w-full px-2 py-1 text-sm ${
            isFailed
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-700"
          }`}
          onClick={handleFailedClick}
          disabled={isFailed} // Disable button
        >
          {isFailed ? "Task Failed" : "Mark as Failed"}
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
