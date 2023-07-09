import React, { useState } from "react";

export interface DropdownOption {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  defaultLabel: string;
}

const Dropdown: React.FC<CustomDropdownProps> = ({
  options,
  defaultLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const selectOption = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className='relative inline-block'>
      <button
        className='text-white bg-main-brand hover:bg-main-brand focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-main-brand dark:hover:bg-main-brand dark:focus:ring-main-brand'
        type='button'
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption.label : defaultLabel}
        <svg
          className={`w-2.5 h-2.5 ml-2.5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>

      {isOpen && (
        <div className='z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'>
          <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type='button'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left'
                  onClick={() => selectOption(option)}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
