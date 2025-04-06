import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = ({ employees, setEmployees }) => {
  console.log("in create task data", employees);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const authData = useContext(AuthContext);
  const submitHandler = (e) => {
    e.preventDefault();

    // Ensure All Fields Are Filled
    if (
      !taskTitle ||
      !taskDescription ||
      !taskDate ||
      !assignTo ||
      !taskCategory
    ) {
      alert("❌ All fields are required!");
      return;
    }

    const newTask = {
      task_title: taskTitle.trim(),
      task_description: taskDescription.trim(),
      task_category: taskCategory.trim(),
      task_date: taskDate,
      active: false,
      newtask: true,
      completed: false,
      failed: false,
    };
    let updatedEmployees = employees.map((emp) => {
      if (emp.firstname.trim() === assignTo.trim()) {
        // console.log("Employee from localStorage:", emp);

        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          task_numbers: {
            ...emp.task_numbers,
            newtask: emp.task_numbers.newtask + 1,
          },
        };
      }
      return emp;
    });
    // console.log("Updated Employees List:", updatedEmployees);

    setEmployees(updatedEmployees);

    // Update Context
    authData.updateUserData({
      ...authData.userData,
      employees: updatedEmployees,
    });
    
    // localStorage.setItem("employees", JSON.stringify(data));
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setTaskCategory("");
    setTaskDescription("");
  };
  useEffect(() => {
    // console.log("create task m hu");
    localStorage.setItem("employees", JSON.stringify(employees));
    // console.log("localStorage Updated:", employees);
  }, [employees]);

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex-wrap w-full flex items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title </h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Design , Dev , etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start ">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 rounded px-5 text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
