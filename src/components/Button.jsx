import React from "react";

const Button = ({ children }) => {
  return (
    <div className="border px-8 py-4 border-black/90  cursor-pointer bg-white hover:bg-black/85 hover:text-white text-xs uppercase duration-200 text-center">
      {children}
    </div>
  );
};

export default Button;
