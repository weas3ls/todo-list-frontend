"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { AiOutlineArrowLeft } from "react-icons/ai";

import TaskForm from "@/forms/TaskForm";

const Page = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (task: { title: string; color: string }) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            });

            if (!response.ok) throw new Error("Failed to create task");

            //* Redirect to the home page
            router?.push("/");
        } catch (err) {
            console.error(err);
            setError("Failed to create task");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-20 flex w-full flex-col items-start gap-12">
            <Link href="/">
                <AiOutlineArrowLeft className="text-3xl text-white" />
            </Link>
            {error && <span className="text-red w-full text-xl">{error}</span>}
            <TaskForm submitting={isSubmitting} onSubmit={handleSubmit} />
            {isSubmitting && (
                <span className="w-full text-xl text-[#808080]">
                    Submitting...
                </span>
            )}
        </div>
    );
};

export default Page;
