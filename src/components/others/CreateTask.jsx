import React, { useState, useRef } from "react";

const CreateTask = () => {
  // Use State Instead of useRef for Task Data
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

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
      console.error("❌ All fields are required!");
      return;
    }

    // Create Task Object (Instead of Using State Update)
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

    console.log("✅ New Task Created:", newTask);

    // Get Employees From Local Storage
    let data = JSON.parse(localStorage.getItem("employees")) || [];

    let taskAssigned = false;
    data.forEach((elem) => {
      if (elem.firstname.trim() === assignTo.trim()) {
        console.log("Before Pushing:", elem.tasks);

        elem.tasks.push(newTask);
        elem.task_numbers.newtask += 1;
        console.log("✅ Task Added:", newTask);
        console.log("Updated Employee:", elem);
        taskAssigned = true;
      }
    });

    if (!taskAssigned) {
      console.error("❌ Employee Not Found!");
      return;
    }

    // Update Local Storage
    localStorage.setItem("employees", JSON.stringify(data));

    // Reset Form Inputs
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setTaskCategory("");
    setTaskDescription("");
  };

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

// import React, { useState } from "react";
// import { useRef } from "react";

// const CreateTask = () => {
//   const taskTitle = useRef("");
//   const taskDate = useRef(null);
//   const assignTo = useRef("");
//   const taskCategory = useRef("");
//   const taskDescription = useRef("");
//   const [newTask, setNewTask] = useState({});
//   const submitHandler = (e) => {
//     e.preventDefault();
//     // console.log(taskTitle.current.value);
//     setNewTask({
//       task_title: taskTitle.current.value,
//       task_description: taskDescription.current.value,
//       task_category: taskCategory.current.value,
//       task_date: taskDate.current.value,
//       active: false,
//       newtask: true,
//       completed: false,
//       failed: false,
//     });
//     const data = JSON.parse(localStorage.getItem("employees")) || [];

//     data.forEach((elem) => {
//       if (elem.firstname.trim() === assignTo.current.value.trim()) {
//         console.log("Before Pushing:", elem.tasks);

//         if (newTask && Object.keys(newTask).length > 0) {
//           elem.tasks.push(newTask);
//           console.log("✅ Task Added:", newTask);
//         } else {
//           console.error("❌ newTask is invalid:", newTask);
//         }

//         elem.task_numbers.newtask += 1;
//         console.log("Updated Employee:", elem);
//       }
//     });

//     localStorage.setItem("employees", JSON.stringify(data));

//     // const data = JSON.parse(localStorage.getItem("employees"));
//     // data.forEach((elem) => {
//     //   if (elem.firstname.trim() === assignTo.current.value.trim()) {
//     //     elem.tasks = [...elem.tasks, newTask];

//     //     //elem.tasks.push(newTask);
//     //     elem.task_numbers.newtask = elem.task_numbers.newtask + 1;
//     //     console.log(elem);
//     //   }
//     // });
//     // localStorage.setItem("employees", JSON.stringify(data));

//     //console.log(task);
//     taskTitle.current.value = " ";
//     taskDate.current.value = null;
//     assignTo.current.value = " ";
//     taskCategory.current.value = " ";
//     taskDescription.current.value = " ";
//   };
//   return (
//     <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
//       <form
//         onSubmit={(e) => submitHandler(e)}
//         className="flex-wrap w-full flex items-start justify-between"
//       >
//         <div className="w-1/2">
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Task Title </h3>
//             <input
//               ref={taskTitle}
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
//               type="text"
//               placeholder="Make a UI Design"
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
//             <input
//               ref={taskDate}
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
//               type="date"
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
//             <input
//               ref={assignTo}
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
//               type="text"
//               placeholder="Employee name"
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
//             <input
//               ref={taskCategory}
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
//               type="text"
//               placeholder="Design , Dev , etc"
//             />
//           </div>
//         </div>

//         <div className="w-2/5 flex flex-col items-start ">
//           <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
//           <textarea
//             ref={taskDescription}
//             className="text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400"
//             name=""
//             id=""
//             cols="30"
//             rows="10"
//           ></textarea>
//           <button className="bg-emerald-500 py-3 hover:bg-emerald-600 rounded px-5 text-sm mt-4 w-full ">
//             Create Task
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;
