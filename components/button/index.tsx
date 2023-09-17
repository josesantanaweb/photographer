"use client";


export interface IButtonProps {
  onClick: () => void;
  label: string;
  variant?: "primary" | "secondary";
}

const Button = (props: IButtonProps) => {
  const {
    onClick,
    label,
    variant = "primary",
  } = props;

  const variantClass =
    variant === "primary"
      ? "bg-gray-200 hover:bg-transparent hover:border-gray-200 hover:text-gray-200"
      : "bg-transparent border-solid border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-black";

  return (
    <button
      className={`flex items-center transition-all justify-center px-8 py-3 capitalize border bg-gray-200 rounded-full outline-none ${variantClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
