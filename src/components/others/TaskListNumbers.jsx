import React from "react";

const TaskListNumbers = ({ data }) => {
  console.log("Employee m jo data mila h", data.task_numbers);
  return (
    <div className="flex  mt-10 screen gap-5 justify-between">
      <div className="bg-red-400 py-6 px-9 w-[45%] rounded-xl">
        <h2 className="text-3xl font-semibold">{data.task_numbers.newtask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-blue-400 py-6 px-9 w-[45%] rounded-xl">
        <h2 className="text-3xl font-semibold">
          {data.task_numbers.completed}
        </h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="bg-green-400 py-6 px-9 w-[45%] rounded-xl">
        <h2 className="text-3xl font-semibold">{data.task_numbers.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="bg-yellow-400 py-6 px-9 w-[45%] rounded-xl">
        <h2 className="text-3xl font-semibold">{data.task_numbers.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
