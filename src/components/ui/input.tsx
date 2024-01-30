import { ForwardRefRenderFunction, forwardRef } from "react";

interface InputProps {
  placeholder: string;
  type: string;
}

const inputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { placeholder, type, ...rest },
  ref
) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
        className="px-3 py-2 bg-quaternary rounded-md w-full"
      />
    </div>
  );
};

export const Input = forwardRef(inputBase);
