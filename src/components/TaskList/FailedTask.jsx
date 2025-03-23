import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const FailedTask = ({ data, task_numbers, userName }) => {
  const [isFailed, setIsFailed] = useState(false);
  const authData = useContext(AuthContext);
  let employees = authData.userData.employees;
  let setUserData = authData.updateUserData;
  const updateLocalStorageAndContext = (updatedEmployees) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      employees: updatedEmployees,
    }));
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    //console.log("local storage aur context update krdia");
  };
  const handleFailedClick = () => {
    setIsFailed(true); // Disable button after click
    //task_numbers.failed += 1;
    //console.log(task_numbers);
    const updatedEmployees = employees.map((emp) => {
      if (emp.firstname === userName) {
        return {
          ...emp,
          tasks: emp.tasks.map((task) =>
            task.task_title === data.task_title
              ? { ...task, failed: true }
              : task
          ),
          task_numbers: {
            ...emp.task_numbers,
            failed: emp.task_numbers.failed + 1,
          },
        };
      }
      return emp;
    });

    updateLocalStorageAndContext(updatedEmployees);
    authData.userData.employees = JSON.parse(localStorage.getItem("employees"));
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
