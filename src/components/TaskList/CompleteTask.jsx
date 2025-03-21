import React from "react";
import { useState } from "react";
const CompleteTask = ({ data, task_numbers }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const handleCompleteClick = () => {
    setIsCompleted(true); // Disable button after click
    task_numbers.failed += 1;
    console.log(task_numbers);
  };
  return (
    <div className="flex-shrink-0 bg-blue-400 h-full w-[350px] rounded-xl p-5">
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
            isCompleted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-700"
          }`}
          onClick={handleCompleteClick}
          disabled={isCompleted} // Disable button
        >
          {isCompleted ? "Task Completed" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
