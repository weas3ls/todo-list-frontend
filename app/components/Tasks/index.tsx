import TasksInfo from "@/components/Tasks/TasksInfo";
import TasksList from "@/components/Tasks/TasksList";
import Task from "@/util/Task";

interface TasksProps {
    tasks: Task[];
}

const Tasks: React.FC<TasksProps> = ({ tasks }) => {
    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <div className="flex w-full flex-col gap-6">
            <TasksInfo tasks={tasks.length} completed={completedTasks} />
            <TasksList tasks={tasks} />
        </div>
    );
};

export default Tasks;
