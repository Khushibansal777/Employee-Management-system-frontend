import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
const TaskList = ({ data }) => {
  //console.log(data);
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full mt-10 flex gap-5 items-center justify-start py-5 flex-nowrap overflow-x-auto"
    >
      {data.tasks.map((e, id) => {
        while (e.active) {
          return (
            <AcceptTask key={id} data={e} task_numbers={data.task_numbers} />
          );
        }
        while (e.newtask) {
          return <NewTask key={id} data={e} task_numbers={data.task_numbers} />;
        }
        while (e.completed) {
          return (
            <CompleteTask key={id} data={e} task_numbers={data.task_numbers} />
          );
        }
        while (e.failed) {
          return (
            <FailedTask key={id} data={e} task_numbers={data.task_numbers} />
          );
        }
      })}
    </div>
  );
};

export default TaskList;
