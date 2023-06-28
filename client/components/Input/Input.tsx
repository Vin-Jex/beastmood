import React, { InputHTMLAttributes, useState } from "react";
import { IconBaseProps } from "react-icons/lib";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  validationError?: string;
  icon?: IconBaseProps | any;
  isValid?: boolean | undefined;
  handleInputChange?: React.ChangeEvent<HTMLInputElement>;
  inputWidth?: number | string;
}

const Input: React.FC<InputProps> = ({
  validationError,
  isValid,
  handleInputChange,
  inputWidth,
  icon: Icon,
  ...inputProps
}) => {
  // const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = event.target.value;
  //   // Add your validation logic here
  //   // Example validation: Input should not be empty
  //   setIsValid(inputValue.trim() !== "");
  // };
  return (
    <div
      className=''
      style={{
        width:
          inputWidth && typeof inputWidth === "string"
            ? ""
            : inputWidth && typeof inputWidth === "number"
            ? "" + "px"
            : "",
      }}
    >
      <div className='flex relative items-center w-full'>
        <input {...inputProps} style={{ width: "100%" }} />
        {Icon && <Icon className='absolute right-3 top-1/2 -translate-y-1/2 text-dark' />}
      </div>
      {validationError && isValid === true && (
        <div className='text-success'>Input is correct</div>
      )}
      {validationError && isValid === false && validationError && (
        <div className='text-error'>{validationError}</div>
      )}
    </div>
  );
};

export default Input;
