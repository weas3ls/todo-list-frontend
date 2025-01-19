"use client";

import Image from "next/image";

import TaskListItem from "@/components/Tasks/TaskListItem";
import clipboard from "@/public/clipboard.png";
import Task from "@/util/Task";

const TasksList = ({
    tasks,
    fetchTasks
}: {
    tasks: Array<Task>;
    fetchTasks: () => void;
}) => {
    return (
        <div className="flex h-64 flex-col items-center justify-start gap-3 border-t border-[#333333]">
            {tasks.length > 0 &&
                tasks.map(task => (
                    <TaskListItem
                        key={task.id}
                        task={task}
                        fetchTasks={fetchTasks}
                    />
                ))}
            {tasks.length === 0 && (
                <div className="mt-6 flex flex-col items-center gap-4">
                    <Image src={clipboard} alt={"Clipboard"} width={56} />
                    <span className="font-bold text-[#808080]">
                        You don&apos;t have any tasks registered yet.
                    </span>
                    <span className="text-[#808080]">
                        Create tasks and organize your to-do items.
                    </span>
                </div>
            )}
        </div>
    );
};

export default TasksList;
