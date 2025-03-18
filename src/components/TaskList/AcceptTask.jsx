import React from "react";

const AcceptTask = ({ data }) => {
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
        <button className="bg-green-500 px-2 py-1 text-sm">
          Mark as Completed
        </button>
        <button className="bg-red-500 px-2 py-1 text-sm">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
