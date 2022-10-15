import {createContext, useState, useEffect} from 'react'
import { tasks as data } from "../data/task";

export const Context = createContext();

export function TaskContext(props) {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
      }, []);    

    const createTask = (taskTitle, taskDescription) => {
        setTasks([...tasks,{
          id: tasks.length + 1,
          title: taskTitle,
          description: taskDescription
      }]);
      };
    
      const deleteTask = (idTask) => {
        const newTasks = tasks.filter(task => task.id !== idTask);
        setTasks(newTasks);
      } 

  return (
    <>
        <Context.Provider value={{
            tasks: tasks,
            deleteTask: deleteTask,
            createTask: createTask
        }}>
            {props.children}
        </Context.Provider>
    </>
  )
}
