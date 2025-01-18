import Image from "next/image";

import clipboard from "@/public/clipboard.png";

import TaskItem from "@/components/Tasks/TaskListItem";
import Task from "@/util/Task";

const TasksList = ({ tasks }: { tasks: Array<Task> }) => {
    const onSelect = () => {};
    const onDelete = () => {};

    return (
        <div className="flex h-64 flex-col items-center justify-center gap-4 border-t border-[#333333]">
            {tasks.length > 0 &&
                tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onSelect={onSelect}
                        onDelete={onDelete}
                    />
                ))}
            {tasks.length === 0 && (
                <>
                    <Image src={clipboard} alt={"Clipboard"} width={56} />
                    <span className="font-bold text-[#808080]">
                        You don&apos;t have any tasks registered yet.{" "}
                    </span>
                    <span className="text-[#808080]">
                        Create tasks and organize your to-do items.
                    </span>
                </>
            )}
        </div>
    );
};

export default TasksList;
