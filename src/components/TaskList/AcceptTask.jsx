import React from "react";
import { useState } from "react";

const AcceptTask = ({ data, task_numbers }) => {
  //console.log(task_numbers);
  const [isFailed, setIsFailed] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleFailedClick = () => {
    setIsFailed(true); // Disable button after click
    task_numbers.failed += 1;
    console.log(task_numbers);
  };
  const handleCompletedClick = () => {
    setIsCompleted(true); // Disable button after click
    task_numbers.completed += 1;
    console.log(task_numbers);
  };

  //console.log(data.task_title);
  return (
    <div className="flex-shrink-0 bg-red-400 h-full w-[350px] rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
          {data.task_category}
        </h3>
        <h4 className="text-sm"> {data.task_date}</h4>
      </div>
      <h2 className="text-2xl font-semibold mt-5"> {data.task_title}</h2>
      <p className="text-sm mt-2">{data.task_description}</p>
      <div className="flex justify-between mt-4">
        <button
          className={`px-2 py-1 text-sm ${
            isCompleted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-700"
          }`}
          onClick={handleCompletedClick}
          disabled={isCompleted} // Disable button
        >
          {isCompleted ? "Completed" : "Mark as Completed"}
        </button>
        <button
          className={`px-2 py-1 text-sm ${
            isFailed
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-700"
          }`}
          onClick={handleFailedClick}
          disabled={isFailed} // Disable button
        >
          {isFailed ? "Failed" : "Mark as Failed"}
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
