import { ReactElement } from "react";

type ButtonProps = {
  isDisabled?: boolean;
  children: ReactElement | String;
  onClick: () => void;
};

const Button = ({ isDisabled = false, children, onClick }: ButtonProps) => {
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
