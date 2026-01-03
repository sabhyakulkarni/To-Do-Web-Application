import axios from "axios";
import { useEffect, useState } from "react";
import "./Tasks.css";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:3000/api/tasks", {
      headers: { Authorization: token },
    });
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;
    await axios.post(
      "http://localhost:3000/api/tasks",
      { title },
      { headers: { Authorization: token } }
    );
    setTitle("");
    fetchTasks();
  };

  const toggleComplete = async (id, completed) => {
    await axios.put(
      `http://localhost:3000/api/tasks/${id}`,
      { completed: !completed },
      { headers: { Authorization: token } }
    );
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/api/tasks/${id}`, {
      headers: { Authorization: token },
    });
    fetchTasks();
  };

  return (
    <div className="container">
      <h2>Your Tasks</h2>

      <div className="input-group">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>+</button>
      </div>

      {tasks.map((t) => (
        <div key={t._id} className={`task ${t.completed ? "done" : ""}`}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => toggleComplete(t._id, t.completed)}
          />
          <span>{t.title}</span>
          <button className="delete" onClick={() => deleteTask(t._id)}>
            🗑
          </button>
        </div>
      ))}
    </div>
  );
}
