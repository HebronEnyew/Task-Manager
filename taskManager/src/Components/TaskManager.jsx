import { useState } from 'react';
import IconButton from './IconButton';
import TaskItem from './TaskItem';

const TaskManager = () => {
  // Initial tasks
  const initialTasks = [
    { id: 1, title: 'Take Kuraz Assesment Quiz', completed: true },
    { id: 2, title: 'Read a book', completed: true },
    { id: 3, title: 'Finish project', completed: false },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    
    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    
    setTasks([task, ...tasks]);
    setNewTask('');
  };

  // task completion
  const toggleTask = (id) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};

const filterTasks = (tasks, status) => {
  return tasks.filter(task => task.completed === status);
};

const pendingTasks = filterTasks(tasks, false); 
const completedTasks = filterTasks(tasks, true); 


  // Deleting a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Task Manager</h1>
              <p className="text-gray-500">{tasks.length} tasks</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <IconButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </IconButton>
            </div>
          </div>

          {/* Add Task Form */}
          <form onSubmit={addTask} className="mb-8">
            <div className={`relative transition-all duration-200 ${isInputFocused ? 'ring-2 ring-indigo-500' : ''} rounded-lg overflow-hidden`}>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                placeholder="Add a new task..."
                className="w-full py-3 px-4 pr-12 bg-gray-50 focus:outline-none text-gray-700"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-1 rounded-md hover:bg-indigo-700 transition-colors"
              >
                <IconButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </IconButton>
              </button>
            </div>
          </form>

          {/* Task List */}
          <div className="space-y-3">
            {tasks.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-4 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <p>No tasks yet. Add one above!</p>
              </div>
            ) : (
              tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;