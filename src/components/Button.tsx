import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button = ({ children, className = "", ...rest }: ButtonProps) => {
  return (
    <button
      className={`${"border border-black py-2 px-4 rounded-lg bg-slate-200 text-black hover:bg-slate-300"} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
