import React from "react";
import { useState } from "react";
const NewTask = ({ data, task_numbers }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const handleAcceptClick = () => {
    setIsAccepted(true); // Disable button after click
    task_numbers.active += 1;
    console.log(task_numbers);
  };
  return (
    <div className="flex-shrink-0 bg-green-400 h-full w-[350px] rounded-xl p-5">
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
          className={`px-2 py-1 text-sm ${
            isAccepted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700"
          }`}
          onClick={handleAcceptClick}
          disabled={isAccepted} // Disable button
        >
          {isAccepted ? "Accepted" : "Accept Task"}
        </button>
      </div>
    </div>
  );
};

export default NewTask;
