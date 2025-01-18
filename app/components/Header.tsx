import Image from "next/image";

import rocket from "@/public/rocket.png";

const Header = () => {
    return (
        <div className="flex w-full items-center justify-center gap-4 bg-[#0D0D0D] p-20">
            <h1 className="flex place-items-start gap-2 text-4xl font-black">
                <Image src={rocket} alt={"Clipboard"} width={22} height={36} />
                <span className="text-[#4EA8DE]">Todo</span>{" "}
                <span className="text-[#5E60CE]">App</span>
            </h1>
        </div>
    );
};

export default Header;
