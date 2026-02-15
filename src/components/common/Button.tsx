import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    loadingText: string;
    disabled: boolean;
    onClick?: () => void;
    isLoading: boolean;
    icon?: React.ComponentType<{ size?: number }>;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
    text, 
    loadingText, 
    disabled, 
    onClick, 
    isLoading, 
    icon: Icon,
    className = ""
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled || isLoading}
            className={`
                bg-primaryLight text-white px-4 py-2 rounded w-full
                flex items-center justify-center gap-2
                hover:bg-primary
                outline-none
                disabled:bg-gray-400 disabled:cursor-not-allowed
                disabled:hover:bg-gray-400
                transition-all duration-300
                ${className}
            `}
        >
            {isLoading && (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {isLoading ? loadingText : text}
            {!isLoading && Icon && <Icon size={18} />}
        </button>
    );
};

export default Button;
