import Image from "next/image";
import React from "react";

interface ButtonProps {
  text: string;
  icon?: string;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
}

const Button = ({
  text,
  icon,
  iconPosition = "right",
  onClick,
  className = "",
  iconClassName = "",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      dir="ltr"
      className={`
        flex
        items-center
        justify-center
        ${className}
      `}
    >
      {icon && iconPosition === "left" && (
        <Image
          src={icon}
          width={22}
          height={22}
          alt="icon"
          className={iconClassName}
        />
      )}

      <span>
        {text}
      </span>

      {icon && iconPosition === "right" && (
        <Image
          src={icon}
          width={22}
          height={22}
          alt="icon"
          className={iconClassName}
        />
      )}
    </button>
  );
};

export default Button;