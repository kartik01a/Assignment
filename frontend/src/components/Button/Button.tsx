import { BeatLoader } from "react-spinners";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "text";
  type?: "button" | "submit";
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  formAction?: ((formData: FormData) => void) | (() => void);
  loading?: boolean;
};

export const defaultButtonStyles = "px-[35px] py-[8px]";
export const allVariants = {
  text: "text-primary font-normal px-0 py-0 hover:text-brand-primary",
};

export const Button = ({
  type = "button",
  children,
  className = "",
  variant = "text",
  onClick,
  disabled = false,
  formAction,
  loading,
}: ButtonProps) => {
  const currentVariant = `${defaultButtonStyles} ${allVariants[variant]}`;

  return (
    <button
      formAction={formAction}
      type={type}
      onClick={onClick}
      className={`${currentVariant} ${className}  ${
        disabled && "opacity-40 cursor-not-allowed"
      }`}
      disabled={disabled}
    >
      {loading ? <BeatLoader color="#fff" size={10} /> : children}
    </button>
  );
};
