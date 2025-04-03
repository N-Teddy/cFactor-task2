import React from "react";

interface ButtonProps {
    text: string;
    className: string | null;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
    return (
        <button className={` ${className} md:block bg-gradient-to-r  from-[#33D35E] to-[#2AB6D9] hover:to-[#2AB6D9] hover:from-[#8bca9c] to-bright-cyan text-white px-8 py-3 rounded-full hover:opacity-80 transition-opacity duration-200`}>
            {text}
        </button>
    );
}

export default Button;
