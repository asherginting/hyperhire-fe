import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => (
  <button onClick={onClick} className="focus:outline-none">
    {children}
  </button>
);
