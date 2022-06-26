import React from "react";

export const PageLoadingAnimation = ({ className }) => {
  return (
    <svg
      className={className}
      version="1.1"
      id="L9"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
    >
      <rect x="20" y="50" width="4" height="10" fill="#F806CC">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="30" y="50" width="4" height="10" fill="#79018C">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="40" y="50" width="4" height="10" fill="#8E05C2">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};
