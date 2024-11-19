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
      //如果 taskText 不是空白（ trim 移除多餘空格後檢查）
      setTasks([...tasks, { text: taskText, completed: false }]);
      //使用展開運算符 ...tasks 保留現有任務，並新增新的任務物件
    }
  };

  // 刪除任務
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    //使用 filter 遍歷 tasks，排除索引等於 index 的任務。濾後的任務陣列儲存在 updatedTasks
    setTasks(updatedTasks); //更新狀態
  };

  // 標記完成
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      //使用 map,如任務的索引等於 index，切換 completed 屬性值。
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); //更新狀態
  };

  // 編輯任務
  const startEditTask = (index) => {
    setEditingIndex(index); // editingIndex 為目標索引
    setEditingText(tasks[index].text); //editingText為該任務的文本內容
  };

  // 保存編輯
  const saveTask = (newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === editingIndex ? { ...task, text: newText } : task
    ); //如果索引等於 editingIndex，更新該任務的 text 為 newText

    setTasks(updatedTasks);
    setEditingIndex(null); //重置 editingIndex 為 null
    setEditingText(""); //清空 editingText
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 className="text-3xl font-bold mb-4">To-Do List by MaggieW</h1>
      {/* 輸入框,渲染 TaskInput 子元件，並傳入 addTask 函數作為 props */}
      <TaskInput addTask={addTask} />

      {/* 任務列表,渲染 TaskList 子元件，並傳入以下 props */}
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
