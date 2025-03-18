import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  //console.log(authData.employees);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded ">
      <div className="bg-red-400  mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5 ">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 ">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 ">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 ">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 ">Failed</h5>
      </div>
      <div className="">
        {authData.employees.map((e, id) => {
          return (
            <div
              className="border border-emerald-300 mb-2 py-2 px-4 flex justify-between rounded"
              key={id}
            >
              <h2 className="text-lg font-medium w-1/5 text-white-600">
                {e.firstname}
              </h2>
              <h3 className="w-1/5 text-blue-400">{e.task_numbers.newtask}</h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {e.task_numbers.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-green-600">
                {e.task_numbers.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">
                {e.task_numbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
