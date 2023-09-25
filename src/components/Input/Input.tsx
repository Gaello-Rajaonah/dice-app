import { ChangeEvent, FC, InputHTMLAttributes, ReactNode } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  classNameInput?: string;
  hasError?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  icons?: ReactNode[];
}

const Input: FC<CustomInputProps> = ({
  className,
  classNameInput,
  onChange,
  hasError = false,
  icons,
  ...rest
}) => {
  return (
    <div
      style={{ border: hasError ? "1px solid red" : "" }}
      className={`flex items-center justify-between px-3 py-2 border-gray-300 border-[1px] rounded-md ${className}`}
    >
      <input
        autoComplete="off"
        className={`w-full bg-transparent focus:outline-none font-lato ${classNameInput}`}
        onChange={onChange}
        {...rest}
      />
      {icons &&
        icons?.map((icon, index) => (
          <div className="mx-1" key={index}>
            {icon}
          </div>
        ))}
    </div>
  );
};

export default Input;
