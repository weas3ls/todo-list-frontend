"use client";

import { useEffect, useState } from "react";

import TasksInfo from "@/components/Tasks/TasksInfo";
import TasksList from "@/components/Tasks/TasksList";
import Task from "@/util/Task";

const Tasks = () => {
    const [tasks, setTasks] = useState<Array<Task>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchTasks = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:3000/tasks");
            if (!response.ok) {
                throw new Error("Failed to fetch tasks");
            }
            const data = await response.json();
            setTasks(data);
        } catch (err) {
            console.error(err);
            setError("Error fetching tasks");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        //* Fetch tasks on initial render
        fetchTasks();
    }, []);

    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <div className="flex w-full flex-col gap-6">
            <TasksInfo tasks={tasks.length} completed={completedTasks} />

            {loading && (
                <span className="w-full text-center text-xl text-[#808080]">
                    Loading...
                </span>
            )}
            {error && <span className="text-red w-full text-xl">{error}</span>}
            {tasks && !loading && (
                <TasksList tasks={tasks} fetchTasks={fetchTasks} />
            )}
        </div>
    );
};

export default Tasks;
