import PropTypes from "prop-types";

function TaskItem(props) {
  const {
    task,
    index,
    deleteTask,
    toggleComplete,
    startEditTask,
    saveTask,
    isEditing,
    editingText,
    setEditingText,
    cancelEdit,
  } = props;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      saveTask(editingText);
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  };

  return (
    <li style={{ margin: "10px 0", display: "flex", alignItems: "center" }}>
      {isEditing ? (
        <>
          <input
            className="border border-gray-300 rounded py-2 px-4 mr-2"
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="mr-2 border border-gray-300 rounded py-2 px-4 hover:bg-green-500 hover:text-white"
            onClick={() => saveTask(editingText)}
          >
            保存
          </button>
          <button
            className="mr-2 border border-gray-300 rounded py-2 px-4 hover:bg-red-500 hover:text-white"
            onClick={cancelEdit}
          >
            取消
          </button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              flex: 1,
              borderBlockEnd: "1px solid #ccc",
              padding: "10px",
            }}
          >
            {task.text}
          </span>
          <button
            className="mr-2 border border-gray-300 rounded py-2 px-4 hover:bg-blue-500 hover:text-white"
            onClick={() => toggleComplete(index)}
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

// 添加 PropTypes
TaskItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
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
