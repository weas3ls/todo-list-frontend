interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
    return (
        <button
            className={`${className} flex w-full items-center justify-center rounded-lg bg-[#1E6F9F] py-4 text-[#F2F2F2]`}
        >
            {children}
        </button>
    );
};

export default Button;
