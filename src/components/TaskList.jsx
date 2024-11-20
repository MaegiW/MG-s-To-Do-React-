import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

function TaskList(props) {
  // 定義 TaskList 函式元件，接收屬性 props
  const {
    tasks, // 任務列表，包含多個任務對象
    deleteTask, // 刪除任務的函式
    toggleComplete, // 切換任務完成狀態的函式
    startEditTask, // 啟動任務編輯模式的函式
    saveTask, // 儲存編輯後任務的函式
    editingIndex, // 當前正在編輯的任務索引
    editingText, // 編輯時的輸入文字
    setEditingText, // 設定編輯文字的函式
    cancelEdit, // 取消編輯模式的函式
  } = props;

  return (
    <ul>
      {tasks.map((task, index) => (
        // 使用 map 遍歷 tasks，為每個任務渲染一個 TaskItem 元件
        <TaskItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          startEditTask={startEditTask}
          saveTask={saveTask}
          isEditing={editingIndex === index}
          editingText={editingText}
          setEditingText={setEditingText}
          cancelEdit={cancelEdit}
        />
      ))}
    </ul>
  );
}

// 添加 PropTypes
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  startEditTask: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
  editingIndex: PropTypes.number,
  editingText: PropTypes.string,
  setEditingText: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
};

export default TaskList;
