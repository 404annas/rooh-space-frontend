const Input = ({ type, placeholder, value, onChange, className, icon: Icon, ...rest }) => {
    return (
        <div className="relative w-full mb-3">
            {Icon && (
                <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                    <Icon size={18} />
                </div>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`border p-2 pl-10 text-base rounded-lg w-full focus:border ${className}`}
                {...rest}
            />
        </div>
    );
};
export default Input;
