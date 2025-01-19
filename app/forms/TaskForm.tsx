"use client";

import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";

import Button from "@/components/Button";
import Label from "@/components/Label";
import ColorPicker from "@/forms/ColorPicker";

interface TaskFormProps {
    //* Optional prop for editing a task
    initialTask?: {
        title: string;
        color: string;
    };
    submitting: boolean;
    onSubmit: (task: { title: string; color: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
    initialTask,
    submitting,
    onSubmit
}) => {
    const [title, setTitle] = useState<string>("");
    const [color, setColor] = useState<string>("bg-[#FF3B30]");

    //* Populate the form fields when editing a task
    useEffect(() => {
        if (initialTask) {
            setTitle(initialTask.title);
            setColor(initialTask.color);
        }
    }, [initialTask]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, color });
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-12">
            <div className="flex flex-col gap-3">
                <Label htmlFor="title">Title</Label>
                <div>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Ex. Brush your teeth"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="block w-full rounded-md bg-[#333333] p-4 text-white"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <Label htmlFor="color">Color</Label>
                <ColorPicker selectedColor={color} onSelectColor={setColor} />
            </div>

            <Button type="submit" className="w-full" disabled={submitting}>
                <span className="flex items-center justify-center gap-2 text-xl">
                    {initialTask ? (
                        <>
                            Save <FaCheck />
                        </>
                    ) : (
                        <>
                            Add Task <HiOutlinePlusCircle />
                        </>
                    )}
                </span>
            </Button>
        </form>
    );
};

export default TaskForm;
