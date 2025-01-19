"use client";

import { FiTrash2 } from "react-icons/fi";

import Link from "next/link";

import Task from "@/util/Task";

const TaskListItem = ({
    task,
    fetchTasks
}: {
    task: Task;
    fetchTasks: () => void;
}) => {
    const handleSelect = async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/tasks/${task.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: task.title,
                        color: task.color,
                        completed: !task.completed
                    })
                }
            );

            if (!response.ok) throw new Error("Failed to update task");

            //* Refetch tasks after update
            fetchTasks();
        } catch (err) {
            console.error(err);
            alert("Error updating task");
        }
    };

    const handleDelete = async () => {
        if (confirm("Are you sure you want to delete this task?"))
            try {
                const response = await fetch(
                    `http://localhost:3000/tasks/${task.id}`,
                    {
                        method: "DELETE"
                    }
                );

                if (!response.ok) throw new Error("Failed to delete task");

                //* Refetch tasks after deletion
                fetchTasks();
            } catch (err) {
                console.error(err);
                alert("Error deleting task");
            }
    };

    return (
        <div className="flex w-full items-center justify-between rounded-lg bg-neutral-800 p-4 text-white shadow">
            <div className="flex items-center gap-3">
                <input
                    checked={task.completed}
                    id={`${task.id}`}
                    type="checkbox"
                    onChange={handleSelect}
                    className="h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-[#4EA8DE] bg-transparent checked:border-none checked:bg-[#5E60CE] focus:outline-none focus:ring-2 focus:ring-[#4EA8DE] focus:ring-offset-2"
                />

                <Link href={{ pathname: `/tasks/edit/${task.id}` }}>
                    <span
                        className={`${
                            task.completed
                                ? "text-[#808080] line-through"
                                : "text-white"
                        } text-sm`}
                    >
                        {task.title}
                    </span>
                </Link>
            </div>

            <button
                onClick={handleDelete}
                className="text-gray-400 transition-colors hover:text-red-500"
                aria-label="Delete task"
            >
                <FiTrash2 className="h-5 w-5" />
            </button>
        </div>
    );
};

export default TaskListItem;
