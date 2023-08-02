import React, { useState } from "react";
import { useTheme } from "next-themes";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import Link from "next/link";

export interface DropdownOption {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  defaultLabel: string;
}

const Dropdown: React.FC<CustomDropdownProps> = ({ options, defaultLabel }) => {
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

export const Popover = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className='px-3 text-left md:cursor-pointer group'>
            <h1
              className='py-7 flex justify-between items-center md:pr-0 pr-5 group'
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className='text-xl md:hidden inline'>
                {heading === link.name ? (
                  <KeyboardArrowDown />
                ) : (
                  <KeyboardArrowUp />
                )}
              </span>
              <span className='text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                <KeyboardArrowUp />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                  <div className='py-3'>
                    <div
                      className='w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45'
                    ></div>
                  </div>
                  <div className='bg-white p-5 grid grid-cols-3 gap-10'>
                    {link.sublinks?.map((mysublinks, index) => (
                      <div key={index}>
                        <h1 className='text-lg font-semibold'>
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, index) => (
                          <li
                            key={index}
                            className='text-sm text-gray-600 my-2.5'
                          >
                            <Link
                              href={slink.link}
                              className='hover:text-primary'
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks?.map((slinks, index) => (
              <div key={index}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className='py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center'
                  >
                    {slinks.Head}

                    <span className='text-xl md:mt-1 md:ml-2 inline'>
                      `$
                      {subHeading === slinks.Head ? (
                        <KeyboardArrowDown />
                      ) : (
                        <KeyboardArrowUp />
                      )}
                      `
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, index) => (
                      <li key={index} className='py-3 pl-14'>
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export const links = [
  {
    name: "home",
    submenu: false,
  },
  {
    name: "blog",
    submenu: false,
  },
  {
    name: "anime",
    submenu: false,
  },
  {
    name: "community",
    submenu: false,
  },
  {
    name: "Men",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "footwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Women",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "footwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Kid's",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "footwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
    ],
  },
];
