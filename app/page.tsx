import { HiOutlinePlusCircle } from "react-icons/hi";

import Button from "@/components/Button";
import Header from "@/components/Header";

export default function Home() {
    return (
        <div className="relative">
            <Header />
            <main className="flex w-full items-center justify-center">
                <div className="container relative flex w-2/5 flex-col items-center gap-16">
                    <Button className="absolute -top-6 z-10">
                        <span className="flex items-center justify-center gap-2 text-xl">
                            Create Task <HiOutlinePlusCircle />
                        </span>
                    </Button>
                </div>
            </main>
        </div>
    );
}
