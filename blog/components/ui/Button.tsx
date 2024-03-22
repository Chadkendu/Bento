import clsx from "clsx";

interface buttonProps {
  text: string;
  onClick?: () => void;
  aria: string;
  action?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  text,
  onClick,
  aria,
  action,
  type,
}: buttonProps) => {
  return (
    <button
      className={clsx(
        "bg-black py-2 px-6 rounded-full text-white",
        action &&
          "absolute top-5 z-[2] right-5 px-6 py-2 text-white rounded-full"
      )}
      onClick={onClick}
      aria-label={aria}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
