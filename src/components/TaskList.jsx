import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

function TaskList(props) {
  const {
    tasks,
    deleteTask,
    toggleComplete,
    startEditTask,
    saveTask,
    editingIndex,
    editingText,
    setEditingText,
    cancelEdit,
  } = props;

  return (
    <ul>
      {tasks.map((task, index) => (
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
