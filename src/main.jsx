import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TaskContext} from "./context/TaskContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContext>
      <App />
    </TaskContext>
  </React.StrictMode>
)
