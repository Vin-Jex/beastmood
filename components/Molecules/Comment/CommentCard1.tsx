import React from "react";
import StarRating from "./StarRating";
import Image from "next/image";
import image from '@/public/images/Large5.jpg'

const CommentCard1 = () => {
  return (
    <div className='bg-[#D9D9D9] p-3 rounded-md flex items-center justify-between'>
      <div className='flex items-center gap-x-3'>
        <Image
          src={image}
          alt='User Profile'
          className='w-12 h-12 rounded-full'
        />
        <div className='flex flex-col justify-center'>
          <span className='text-sm text-dark dark:text-dark'>
            Leave a comment
          </span>
          <span className=''>
            <StarRating />
          </span>
        </div>
      </div>
      <button className='flex items-center justify-center bg-main-brand text-light px-6 py-3.5 rounded-lg capitalize'>
        Add Comment
      </button>
    </div>
  );
};

export default CommentCard1;
