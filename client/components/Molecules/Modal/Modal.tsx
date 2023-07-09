import React, { useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  modalWidth?: string | number;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, modalWidth, children }) => {
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
      <div className='fixed inset-0 flex items-start justify-center m-32'>
        <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm'></div>
        <div
          ref={modalRef}
          className={`relative bg-white rounded-lg shadow-lg dark:bg-main-brand w-full`}
          style={{ width: modalWidth }}
        >
          <button
            type='button'
            className='absolute top-3 right-4 text-white bg-transparent text-xl ml-auto'
            onClick={onClose}
          >
            &times;
          </button>
          <div className='px-6 py-3 border-b rounded-t dark:border-gray-600'>
            <h3 className='text-lg text-white'>
              {title}
            </h3>
          </div>
          <div className='p-6'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
