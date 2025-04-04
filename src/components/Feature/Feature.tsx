import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface FeatureProps {
    index: number,
    icon: string,
    title: string,
    description: string,
}

const Feature: React.FC<FeatureProps> = ({index, icon, title, description}) => {

    const { theme } = useTheme()

    return (
        <div
            style={{
                backgroundColor: theme === "dark" ? "#2d314d" : "",
                color: theme === "dark" ? "#fff" : "#6a7282 "
            }}
            key={index} className="text-center md:text-left"
        >
            <img src={icon} alt="" className="mx-auto md:mx-0 mb-6 h-16 w-16" />
            <h3 className="text-[25px] font-normal text-dark-blue mb-4">{title}</h3>
            <p className=" text-gray-500">{description}</p>
        </div>
    );
}

export default Feature;
