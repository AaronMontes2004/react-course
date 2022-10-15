import { Context } from "../context/TaskContext";
import { useContext } from "react";

function TaskCard({ task}) {

  const {deleteTask} = useContext(Context);

  const mostrarAlerta = () => {
    deleteTask(task.id);
    alert("Tarea Eliminada");
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <h3 className="text-gray-500 text-sm">{task.description}</h3>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={mostrarAlerta}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
