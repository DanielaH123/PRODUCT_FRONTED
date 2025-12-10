// components/HelloWorldTailwind.jsx

import Button from "./Button";

function Button({
    text,
    onClick,
    disabled
}) {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${typeClasses[type]}`}
        >
            {text}
        </button>
    )
}

export default Button

// types expected: primary, secondary, danger, sucess, warning
const baseClasses = "px-6 py-2 font-medium transition-colors rounded-lg"
const typeClasses = {
    primary: "bg-teal-600 text-white hover:bg-teal-800",
    secondary: "bg-gray-600 text-white hover:bg-gray-800",
    danger: "bg-red-600 text-white hover:bg-red-800",
    sucess: "bg-green-600 text-white hover:bg-green-800",
    warning: "bg-yellow-600 text-white hover:bg-yellow-800",
}


