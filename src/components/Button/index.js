import React from "react";

export default function Button({
  type = "button",
  label = "Button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      className={`text-white bg-primary  hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${className}`}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
