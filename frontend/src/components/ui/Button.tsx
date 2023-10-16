import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children }): ReactNode => {
  return (
    <button className="p-3 font-poppins text-xl text-purple-300 border-1 border-slate-300 ">
      {children}
    </button>
  );
};

export default Button;
