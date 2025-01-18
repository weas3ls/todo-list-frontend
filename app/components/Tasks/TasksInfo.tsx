import Badge from "@/components/Badge";

const TasksInfo = ({
    tasks,
    completed
}: {
    tasks: number;
    completed: number;
}) => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="font-bold text-[#4EA8DE]">
                <span className="flex items-center gap-[10px]">
                    Tasks
                    <Badge>{tasks}</Badge>
                </span>
            </h1>
            <h1 className="font-bold text-[#8284FA]">
                <span className="flex items-center gap-[10px]">
                    Completed
                    <Badge>{completed}</Badge>
                </span>
            </h1>
        </div>
    );
};

export default TasksInfo;
