import * as React from "react";
import AuthModel from "./AuthModel";

type ModalComponentProps = {
  title: string;
  children: React.ReactNode;
  modalOpen: boolean;
  handleModalClose: () => void;
};

export default function ModalComponent({
  children,
  title,
  modalOpen,
  handleModalClose,
}: ModalComponentProps) {
  return (
    <AuthModel
      isOpen={modalOpen}
      onClose={handleModalClose}
      className='bg-[#00010C]/30 dark:bg-[#F4F4F4]/30 backdrop-blur-[10px] rounded-3xl'
    >
      <div className='flex flex-col items-center justify-center py-4 md:py-[30px] px-4 md:px-9 w-full'>
        {title !== "" && (
          <span className='font-bold font-lato text-[18px] sm:text-[20px] md:text-[22px] text-[#e0e0e0] py-2 border-b border-white/30 w-full'>
            {title || "Title"}
          </span>
        )}

        <div className='w-full relative'>{children}</div>
      </div>
    </AuthModel>
  );
}
