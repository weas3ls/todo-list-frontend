import React from "react";
import { FiTrash2 } from "react-icons/fi";

import Task from "@/util/Task";

interface TaskItemProps {
    task: Task;
    onSelect: () => void;
    onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onSelect, onDelete }) => {
    return (
        <div className="flex items-center justify-between rounded-lg bg-gray-800 px-4 py-3 text-white shadow">
            <div className="flex items-center gap-3">
                <input
                    type="radio"
                    checked={task.completed}
                    onChange={onSelect}
                    className="h-5 w-5 cursor-pointer accent-blue-500"
                />
                <span className="text-sm">{task.title}</span>
            </div>

            <button
                onClick={onDelete}
                className="text-gray-400 transition-colors hover:text-red-500"
                aria-label="Delete task"
            >
                <FiTrash2 className="h-5 w-5" />
            </button>
        </div>
    );
};

export default TaskItem;
