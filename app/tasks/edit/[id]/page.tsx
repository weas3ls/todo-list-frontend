"use client";

import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Link from "next/link";
import { useRouter } from "next/navigation";

import TaskForm from "@/forms/TaskForm";

const Page = ({ params }: { params: Promise<{ id: number }> }) => {
    let taskId: number | null = null;

    params.then(resolvedParams => {
        taskId = resolvedParams.id;
        console.log("Task ID:", taskId);
    });

    const [task, setTask] = useState<{ title: string; color: string } | null>(
        null
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/tasks/${taskId}`
                );
                if (!response.ok) throw new Error("Failed to fetch task");

                const data = await response.json();
                setTask({ title: data.title, color: data.color });
            } catch (err) {
                console.error(err);

                setError("Failed to load task");
            } finally {
                setLoading(false);
            }
        };

        fetchTask();
    }, [taskId]);

    const handleSubmit = async (task: { title: string; color: string }) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch(
                `http://localhost:3000/tasks/${taskId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(task)
                }
            );

            if (!response.ok) throw new Error("Failed to update task");

            //* Redirect to the home page
            router!.push("/");
        } catch (err) {
            console.error(err);
            setError("Failed to update task");
        } finally {
            setIsSubmitting(false);
        }
    };

    let content;

    if (loading)
        content = (
            <span className="w-full text-xl text-[#808080]">Loading...</span>
        );
    if (error)
        content = <span className="text-red w-full text-xl">{error}</span>;
    if (task)
        content = (
            <TaskForm
                submitting={isSubmitting}
                initialTask={task}
                onSubmit={handleSubmit}
            />
        );

    return (
        <div className="mt-20 flex w-full flex-col items-start gap-12">
            <Link href="/">
                <AiOutlineArrowLeft className="text-3xl text-white" />
            </Link>
            {content}
        </div>
    );
};

export default Page;
