import PropTypes from "prop-types";

function TaskItem(props) {
  // 定義 TaskItem 函式元件，接收屬性 props
  const {
    task, // 當前的任務對象，包含文字與完成狀態
    index, // 任務在列表中的索引
    deleteTask, // 刪除任務的函式
    toggleComplete, // 切換任務完成狀態的函式
    startEditTask, // 啟動任務編輯模式的函式
    saveTask, // 儲存修改後任務的函式
    isEditing, // 是否正在編輯任務的布林值
    editingText, // 編輯時的輸入文字
    setEditingText, // 設定編輯文字的函式
    cancelEdit, // 取消編輯模式的函式
  } = props; // 使用解構賦值將 props 中的各屬性取出，方便使用

  // 定義鍵盤事件處理函式
  const handleKeyPress = (e) => {
    // 當按下 "Enter" 鍵時，儲存編輯後的任務
    if (e.key === "Enter") {
      saveTask(editingText);
      // 當按下 "Escape" 鍵時，取消編輯模式
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  };

  return (
    <li style={{ margin: "10px 0", display: "flex", alignItems: "center" }}>
      {isEditing ? (
        <>
          {/* 如果正在編輯，顯示輸入框和操作按鈕 */}
          <input
            className="border border-gray-300 rounded py-2 px-4 mr-2"
            type="text"
            value={editingText} // 輸入框的值為編輯文字
            onChange={(e) => setEditingText(e.target.value)} // 更新編輯文字
            onKeyDown={handleKeyPress} // 處理鍵盤事件
          />
          <button
            className="mr-2 border border-gray-300 rounded py-2 px-4 hover:bg-green-500 hover:text-white"
            onClick={() => saveTask(editingText)} // 儲存按鈕，點擊後儲存編輯
          >
            保存
          </button>
          <button
            className="mr-2 border border-gray-300 rounded py-2 px-4 hover:bg-red-500 hover:text-white"
            onClick={cancelEdit} // 取消按鈕，點擊後取消編輯模式
          >
            取消
          </button>
        </>
      ) : (
        <>
          {/* 如果不是編輯模式，顯示任務文字和操作按鈕 */}
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none", // 已完成則加刪除線
              flex: 1,
              borderBlockEnd: "1px solid #ccc",
              padding: "10px",
            }}
          >
            {task.text} {/* 顯示任務文字 */}
          </span>
          <button
            className="mr-2 border border-gray-300 rounded py-2 px-4 hover:bg-blue-500 hover:text-white"
            onClick={() => toggleComplete(index)} // 切換完成狀態按鈕
          >
            {task.completed ? "未完成" : "完成"}
          </button>
          <button
            className="mr-2 border border-gray-300 rounded py-2 px-4 hover:bg-green-500 hover:text-white"
            onClick={() => startEditTask(index)}
          >
            修改
          </button>
          <button
            className="mr-2 border border-gray-300 rounded py-2 px-4 hover:bg-red-500 hover:text-white"
            onClick={() => deleteTask(index)}
          >
            刪除
          </button>
        </>
      )}
    </li>
  );
}

// 添加 PropTypes定義元件屬性的類型檢查
TaskItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired, //isRequired必填
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  startEditTask: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  editingText: PropTypes.string,
  setEditingText: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
};

export default TaskItem;
