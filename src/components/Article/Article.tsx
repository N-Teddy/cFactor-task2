import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface ArticleProps {
    index: number,
    image: string,
    author: string,
    title: string,
    content: string,

}


const Article: React.FC<ArticleProps> = ({ index, image, author, title, content }) => {

    const { theme } = useTheme()

    return (
        <article
            style={{
                backgroundColor: theme === "dark" ? "#2d314d" : "#fff",
                color: theme === "dark" ? "#fff" : "#6a7282 "
            }}
            key={index} className="bg-white rounded-lg overflow-hidden shadow-sm h-full transform transition-transform"
        >
            <div className="h-48 overflow-hidden">
                <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
                <span className="text-xs text-grayish-blue">By {author}</span>
                <h3 className="text-xl font-medium mt-2 mb-2 hover:text-[#33D35E] cursor-pointer transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-grayish-blue line-clamp-3">{content}</p>
            </div>
        </article>
    );
}

export default Article;
