import { useState } from "react";
import PropTypes from "prop-types";

function TaskInput(props) {
  const { addTask } = props;
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText(""); // 清空輸入框
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask(); // 按下 Enter 時執行新增
    }
  };

  return (
    <div>
      <input
        className="border border-gray-300 rounded py-2 px-4 mr-2"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={handleKeyPress} // 按下Enter鍵
        placeholder="輸入新的任務"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddTask}
      >
        新增
      </button>
    </div>
  );
}
// 定義 PropTypes
TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired, // addTask 必須是函數且為必填
};

export default TaskInput;
