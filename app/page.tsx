import Link from "next/link";

import React from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";

import Button from "@/components/Button";
import Tasks from "@/components/Tasks";

export default async function Home() {
    return (
        <React.Fragment>
            <Button
                className="absolute -top-6 z-10"
                type="button"
                disabled={false}
            >
                <Link href={"/tasks/create"}>
                    <span className="flex items-center justify-center gap-2 text-xl">
                        Create Task <HiOutlinePlusCircle />
                    </span>
                </Link>
            </Button>
            <div className="mt-10"></div>
            <Tasks />
        </React.Fragment>
    );
}
