import { useState, useContext } from "react";
import { Context} from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
    document.getElementById("title").focus();

  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white pb-3">Crea tu tarea</h1>
        <input id="title" className="bg-slate-300 p-3 w-full mb-2"
        value={title}
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          autoFocus
        />
        <textarea className="bg-slate-300 p-3 w-full mb-2" value={description} placeholder="Escribe una descripción" cols="30" rows="5" onChange={(e) => {setDescription(e.target.value)}}></textarea>

        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
