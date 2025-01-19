import React from "react";

interface LabelProps {
    htmlFor: string;
    children: React.ReactNode;
    className?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, className }) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`text-sm font-bold leading-4 text-[#4EA8DE] ${className || ""}`}
        >
            {children}
        </label>
    );
};

export default Label;
