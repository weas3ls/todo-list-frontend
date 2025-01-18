import Link from "next/link";

import { HiOutlinePlusCircle } from "react-icons/hi";

import Button from "@/components/Button";
import Tasks from "@/components/Tasks";
import Task from "@/util/Task";

export default async function Home() {
    const data = await fetch("http://localhost:3000/tasks");
    const tasks: Array<Task> = await data.json();

    return (
        <>
            <Button className="absolute -top-6 z-10">
                <Link href={"/tasks/create"}>
                    <span className="flex items-center justify-center gap-2 text-xl">
                        Create Task <HiOutlinePlusCircle />
                    </span>
                </Link>
            </Button>
            <div className="mt-10"></div>
            <Tasks tasks={tasks} />
        </>
    );
}
