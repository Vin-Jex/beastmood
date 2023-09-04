import Image, { StaticImageData } from "next/image";
import React from "react";

interface PropTypes {
  index: number;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  title: string;
  subTitle: string;
}

const RatingCard: React.FC<PropTypes> = ({
  index,
  imageSrc,
  imageAlt,
  title,
  subTitle,
}) => {
  return (
    <li className='flex gap-6 lg:gap-y-4 lg:gap-x-3'>
      <span className='text-dark dark:text-light text-sm font-medium mr-2'>
        {index + "." || "1" + "."}
      </span>

      <Image
        src={imageSrc}
        alt={imageAlt ? imageAlt : !imageAlt && title ? title : "Manga one"}
        className='w-[4rem] xl:w-[5rem] h-[4rem] xl:h-[4.6rem] rounded-lg object-cover'
      />
      <div className='flex flex-col space-y-2'>
        <span className='text-dark dark:text-light text-sm lg:text-base font-medium whitespace-nowrap'>
          {title || "Shingeki no Kyogin..."}
        </span>
        <p className='text-dark dark:text-light text-xs xl:text-sm'>
          {subTitle || "紗子 Thriller"}
        </p>
      </div>
    </li>
  );
};

export default RatingCard;
