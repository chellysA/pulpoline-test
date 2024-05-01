import { ReactNode } from "react";

interface IButtonBaseProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

const ButtonBase = ({ onClick, children, className }: IButtonBaseProps) => {
  return (
    <>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </>
  );
};

export default ButtonBase;
