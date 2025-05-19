// src/app/components/Button.tsx
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({ children, onClick, type = "button", className = "" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#FF7A00] text-black font-bold px-6 py-2 rounded shadow hover:bg-white hover:text-[#FF7A00] transition ${className}`}
    >
      {children}
    </button>
  );
}