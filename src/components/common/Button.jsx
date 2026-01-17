const Button = ({ text, loadingText, disabled, onClick, isLoading, icon: Icon }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                bg-primaryLight text-white px-4 py-2 rounded w-full 
                flex items-center justify-center gap-2
                hover:bg-primary 
                outline-none 
                disabled:bg-gray-400 disabled:cursor-not-allowed 
                disabled:hover:bg-gray-400
                transition-all duration-300
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
