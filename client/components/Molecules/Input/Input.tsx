import { InfoOutlined } from "@mui/icons-material";
import React, { InputHTMLAttributes, useState } from "react";
import { IconBaseProps } from "react-icons/lib";
import PropTypes from "prop-types";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  validationError?: string;
  hideIcon?: IconBaseProps | any;
  showIcon?: IconBaseProps | any;
  isValid?: boolean | undefined;
  handleInputChange?: React.ChangeEvent<HTMLInputElement>;
  inputWidth?: number | string;
  status?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  validationError, // Error message
  isValid, // Boolean
  handleInputChange, // Function
  inputWidth, // Input size
  hideIcon: HideIcon, // Icon (HTML Element)
  showIcon: ShowIcon, // Icon (HTML Element)
  status, // Accepts warning, error, success strings only
  type: Type, // Input Type
  ...inputProps // Other properties
}) => {
  // const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const [showInput, setShowInput] = useState<boolean | undefined>(false);

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = event.target.value;
  //   // Add your validation logic here
  //   // Example validation: Input should not be empty
  //   setIsValid(inputValue.trim() !== "");
  // };

  const showInputField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowInput(!showInput);
  };

  const statusColor =
    status === "success"
      ? "#06C270"
      : status === "warning"
      ? "#FFCC00"
      : status === "error"
      ? "#FF3B3B"
      : "#0063F7";
  return (
    <div
      className='space-y-1 w-full'
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
        <input
          type={showInput ? "text" : Type}
          {...inputProps}
          style={{
            width: "100%",
            border: `1.5px solid ${statusColor}`,
            outline: "none",
          }}
        />
        {ShowIcon && showInput ? (
          <ShowIcon
            className='absolute right-3 top-1/2 -translate-y-1/2 text-dark'
            onClick={showInputField}
          />
        ) : HideIcon && !showInput ? (
          <HideIcon
            className='absolute right-3 top-1/2 -translate-y-1/2 text-dark'
            onClick={showInputField}
          />
        ) : (
          ""
        )}
      </div>
      {validationError && isValid && (
        <div className='flex items-center space-x-1'>
          <span className='flex items-center'>
            <InfoOutlined
              sx={{ fontSize: "1.2rem", color: `${statusColor}` }}
            />
          </span>
          <p style={{ color: `${statusColor}` }}>{validationError}</p>
        </div>
      )}
    </div>
  );
};

export default Input;

Input.propTypes = {
  validationError: PropTypes.string,
  showIcon: PropTypes.element,
  hideIcon: PropTypes.element,
  isValid: PropTypes.bool,
  handleInputChange: PropTypes.any,
  inputWidth: PropTypes.any,
  status: PropTypes.string,
};
