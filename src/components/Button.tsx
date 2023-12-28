import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode, color: string, className?: string;
}

export default function Button({children, color, className, ...props}: ButtonProps) {
    const buttonColor = color === "primary" 
                        ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                        : "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";

    const updatedClassName = `${buttonColor} ${className}`;

  return (
    <button className={updatedClassName} {...props}>
        {children}
    </button>
  )
}
