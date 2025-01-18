interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

const Badge = ({ children, className }: BadgeProps) => {
    return (
        <span
            className={`${className} me-2 rounded-full bg-[#333333] px-2 py-1 text-xs font-medium text-[#F2F2F2]`}
        >
            {children}
        </span>
    );
};

export default Badge;
