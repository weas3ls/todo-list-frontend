interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    disabled: boolean;
    type: "button" | "submit" | "reset" | undefined;
}

const Button = ({ children, className, disabled, type }: ButtonProps) => {
    return (
        <button
            className={`${className} flex w-full items-center justify-center rounded-lg bg-[#1E6F9F] py-4 text-[#F2F2F2] disabled:cursor-not-allowed disabled:bg-[#3A6471] disabled:text-[#A3A3A3]`}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
