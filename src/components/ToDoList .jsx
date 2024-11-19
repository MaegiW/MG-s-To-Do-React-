import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const ToDoList = () => {
  //狀態管理區域
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  // 新增任務
  const addTask = (taskText) => {
    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, completed: false }]);
    }
  };

  // 刪除任務
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // 標記完成
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // 編輯任務
  const startEditTask = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index].text);
  };

  // 保存編輯
  const saveTask = (newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === editingIndex ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 className="text-3xl font-bold mb-4">To-Do List by MaggieW</h1>
      {/* 輸入框 */}
      <TaskInput addTask={addTask} />
      {/* 任務列表 */}
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        startEditTask={startEditTask}
        saveTask={saveTask}
        editingIndex={editingIndex}
        editingText={editingText}
        setEditingText={setEditingText}
        cancelEdit={() => setEditingIndex(null)}
      />
    </div>
  );
};

export default ToDoList;
