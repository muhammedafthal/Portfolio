import React from "react";
import "./Button.css";

export const Button = ({
  children,
  variant = "primary", // primary | secondary | outline | ghost
  size = "md", // sm | md | lg
  icon: Icon,
  iconPosition = "left",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) => {
  const classNames = `btn btn-${variant} btn-${size} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="btn-icon btn-icon-left" size={18} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="btn-icon btn-icon-right" size={18} />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classNames} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      {...props}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
