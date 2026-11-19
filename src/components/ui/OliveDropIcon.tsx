import React from "react";

export default function OliveDropIcon({
  className = "w-4 h-4",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2.2C12 2.2 5.2 10.1 5.2 14.8C5.2 18.67 8.24 21.8 12 21.8C15.76 21.8 18.8 18.67 18.8 14.8C18.8 10.1 12 2.2 12 2.2Z"
        fill="currentColor"
      />
      <path
        d="M9.1 15.1C9.1 16.9 10.35 18.4 12.1 18.65"
        stroke="#FFFFFF"
        strokeWidth="1.65"
        strokeLinecap="round"
        opacity="0.88"
      />
    </svg>
  );
}