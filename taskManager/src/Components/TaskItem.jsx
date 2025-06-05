import IconButton from './IconButton';
import { CheckIcon, TrashIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`group flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
      task.completed
        ? 'bg-green-50 border-l-4 border-green-500'
        : 'bg-gray-50 hover:bg-gray-100'
    }`}>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onToggle(task.id)}
          className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
            task.completed
              ? 'bg-green-500 text-white'
              : 'border-2 border-gray-300 hover:border-indigo-500'
          }`}
        >
          {task.completed && <CheckIcon className="h-3 w-3" />}
        </button>
        <span className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task.title}
        </span>
      </div>
      <IconButton 
        icon={<TrashIcon />} 
        onClick={() => onDelete(task.id)} 
        color="red"
        className="opacity-0 group-hover:opacity-100"
      />
    </div>
  );
};

export default TaskItem;