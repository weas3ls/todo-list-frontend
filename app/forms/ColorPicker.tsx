"use client";

import React from "react";

interface ColorPickerProps {
    //* Controlled color state from parent
    selectedColor: string;
    //* Callback to update selected color
    onSelectColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
    selectedColor,
    onSelectColor
}) => {
    const colors = [
        "bg-[#FF3B30]",
        "bg-[#FF9500]",
        "bg-[#FFCC00]",
        "bg-[#34C759]",
        "bg-[#007AFF]",
        "bg-[#5856D6]",
        "bg-[#AF52DE]",
        "bg-[#FF2D55]",
        "bg-[#A2845E]"
    ];

    return (
        <div className="flex flex-wrap gap-4 lg:flex-nowrap">
            {colors.map(color => (
                <button
                    type="button"
                    key={color}
                    className={`h-14 w-14 rounded-full ${color} ${
                        selectedColor === color
                            ? "ring-2 ring-white ring-offset-2"
                            : ""
                    }`}
                    onClick={() => onSelectColor(color)}
                    aria-label={`Select ${color}`}
                />
            ))}
        </div>
    );
};

export default ColorPicker;
