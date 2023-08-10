import React, { useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  modalWidth?: string | number;
  onClose: () => void;
  children: React.ReactNode;
  defaultHeader?: boolean | null;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  modalWidth,
  children,
  defaultHeader,
  className,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className='fixed top-0 inset-0 flex items-start justify-center'>
        <div className='fixed inset-0 bg-black/20 backdrop-blur-2xl h-screen'></div>
        <div
          ref={modalRef}
          className={`relative bg-gray-100 rounded-lg shadow-lg dark:bg-dark w-full my-auto ${className}`}
          style={{ width: modalWidth }}
        >
          {(defaultHeader === undefined ||
            defaultHeader === null ||
            defaultHeader === true) && (
            <>
              <button
                type='button'
                className='absolute top-3 right-6 text-dark dark:text-light bg-transparent text-2xl ml-auto'
                onClick={onClose}
              >
                &times;
              </button>
              <div className='px-6 py-3 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-lg text-dark dark:text-white'>{title}</h3>
              </div>
            </>
          )}
          <div
            className={`${
              defaultHeader === undefined ||
              defaultHeader === null ||
              (defaultHeader === true && "p-6")
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
