import Layout from "@/components/Layout/Layout";
import React, { ChangeEvent, useState } from "react";
import image from "@/public/images/Onepiece-small-1.png";
import Img2 from "@/public/images/Rectangle 24.png";
import Image from "next/image";
import { PiBookOpenTextBold } from "react-icons/pi";
import { LuFlag } from "react-icons/lu";
import { Message, Star } from "@mui/icons-material";
import Chapters from "@/components/Molecules/Chapters";
import RatingCard from "@/components/Molecules/ratingCard";
import CommentCard1 from "@/components/Molecules/Comment/CommentCard1";
import CommentInput from "@/components/Molecules/Comment/CommentInput";
import CommentLayout from "@/components/Molecules/Comment/CommentLayout";
import profileImage1 from "@/public/images/profile.png";
import profileImage2 from "@/public/images/profile.png";
import profileImage3 from "@/public/images/profile.png";
import MangaSwiper from "@/components/Molecules/MangaSwiper";
import { swipData } from "..";

const commentData = [
  {
    userProfile: profileImage1,
    userName: "Jane Doe",
    comment:
      "Nami is my favorite. She's a strong and resourceful navigator, and her character development throughout the series is remarkable. I also appreciate how she keeps the crew's finances in check!",
    commentDate: "1 hour ago",
    likes: 4,
    replies: [
      {
        userProfile: profileImage2,
        userName: "John Smith",
        comment: "I agree, Nami is awesome!",
        commentDate: "2 hours ago",
        likes: 2,
        replies: [],
      },
      {
        userProfile: profileImage3,
        userName: "Alice Johnson",
        comment: "Nami's navigation skills are top-notch!",
        commentDate: "1 hour ago",
        likes: 1,
        replies: [],
      },
    ],
  },
  {
    userProfile: profileImage2,
    userName: "John Smith",
    comment: "Luffy is my favorite character!",
    commentDate: "2 hours ago",
    likes: 3,
    replies: [],
  },
  {
    userProfile: profileImage1,
    userName: "Jane Smith",
    comment:
      "Nami is my favorite. She's a strong and resourceful navigator, and her character development throughout the series is remarkable. I also appreciate how she keeps the crew's finances in check!",
    commentDate: "5 hours ago",
    likes: 4,
    replies: [
      {
        userProfile: profileImage2,
        userName: "John Smith",
        comment: "I agree, Nami is awesome!",
        commentDate: "2 hours ago",
        likes: 2,
        replies: [],
      },
      {
        userProfile: profileImage3,
        userName: "Alice Johnson",
        comment: "Nami's navigation skills are top-notch!",
        commentDate: "1 hour ago",
        likes: 1,
        replies: [],
      },
    ],
  },
  {
    userProfile: profileImage2,
    userName: "Jane Moran",
    comment: "Luffy is my favorite character!",
    commentDate: "7 hours ago",
    likes: 3,
    replies: [],
  },
];

const Index = () => {
  const [visibleComments, setVisibleComments] = useState(3);
  const [commentValue, setCommentValue] = useState("");

  const loadMoreComments = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 3);
  };

  const handleSubmit = () => {};
  return (
    <Layout>
      <div>
        <div
          className={`flex items-center justify-center w-full h-full min-h-[864px] max-h-screen backdrop-blur-md bg-black/[79%] relative`}
        >
          <Image
            src={image}
            alt='backgroundImage'
            className='object-cover w-full h-full -z-20 absolute top-0'
          />
          <div className='flex backdrop-blur-md w-full h-full !bg-black/[79%] px-[72px] absolute top-0'>
            <div className='flex w-full gap-6 pt-[92px] px-7'>
              <Image
                src={image}
                alt='one piece'
                className='w-[196px] h-[284px]'
              />
              <div className='flex flex-col'>
                <div className='flex flex-col'>
                  <span className='text-white/40 text-sm font-medium capitalize'>
                    action || thriller
                  </span>
                  <span className='text-white text-3xl font-medium capitalize'>
                    one piece
                  </span>
                  <div className='flex gap-x-4 md:gap-x-8 mt-5 text-white'>
                    <button className='flex items-center gap-x-3 bg-main-brand hover:bg-main-brand/[85%] duration-300 transition-all text-white text-sm md:text-base font-medium capitalize px-6 py-3 rounded-md w-fit'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-[17px]'
                        viewBox='0 0 24 20'
                        fill='none'
                      >
                        <path
                          d='M22.9674 0.70459C22.7855 0.560153 22.5727 0.459814 22.3456 0.411445C22.1185 0.363076 21.8832 0.367992 21.6583 0.425809L13.2707 2.58333V19.8798L22.4341 17.5284C22.7618 17.4445 23.052 17.2533 23.2585 16.9853C23.465 16.7173 23.5759 16.3879 23.5734 16.0496V1.89244C23.5697 1.66133 23.5132 1.43414 23.4081 1.22825C23.3031 1.02237 23.1523 0.843241 22.9674 0.70459ZM10.8465 2.58333L2.4346 0.425809C2.21314 0.374531 1.98308 0.372935 1.76093 0.421137C1.53879 0.469338 1.33007 0.56614 1.14979 0.70459C0.966069 0.848224 0.817988 1.03233 0.717075 1.24256C0.616161 1.4528 0.56514 1.68349 0.567984 1.91668V16.0496C0.568239 16.3859 0.680331 16.7125 0.886606 16.978C1.09288 17.2435 1.38162 17.4329 1.70735 17.5163L10.8465 19.8798V2.58333Z'
                          fill='white'
                        />
                      </svg>
                      Read
                    </button>
                    <button className='flex items-center gap-x-3 bg-main2-brand hover:bg-main2-brand/[85%] duration-300 transition-all text-sm md:text-base text-dark font-medium capitalize px-6 py-3 rounded-md w-fit'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-[18px] mt-0.5 md:mt-1'
                        viewBox='0 0 21 15'
                        fill='none'
                      >
                        <path
                          d='M1.65402 2.72164C1.34628 2.72164 1.08814 2.61737 0.879598 2.40883C0.671059 2.20029 0.567151 1.94251 0.567875 1.6355C0.567875 1.32775 0.672145 1.06961 0.880685 0.861075C1.08922 0.652535 1.347 0.548627 1.65402 0.549351H12.5155C12.8232 0.549351 13.0814 0.653621 13.2899 0.862161C13.4984 1.0707 13.6023 1.32848 13.6016 1.6355C13.6016 1.94324 13.4973 2.20138 13.2888 2.40992C13.0803 2.61846 12.8225 2.72236 12.5155 2.72164H1.65402ZM1.65402 7.06622C1.34628 7.06622 1.08814 6.96195 0.879598 6.75341C0.671059 6.54487 0.567151 6.28709 0.567875 5.98008C0.567875 5.67233 0.672145 5.41419 0.880685 5.20565C1.08922 4.99711 1.347 4.89321 1.65402 4.89393H12.5155C12.8232 4.89393 13.0814 4.9982 13.2899 5.20674C13.4984 5.41528 13.6023 5.67306 13.6016 5.98008C13.6016 6.28782 13.4973 6.54596 13.2888 6.7545C13.0803 6.96304 12.8225 7.06695 12.5155 7.06622H1.65402ZM1.65402 11.4108C1.34628 11.4108 1.08814 11.3065 0.879598 11.098C0.671059 10.8895 0.567151 10.6317 0.567875 10.3247C0.567875 10.0169 0.672145 9.75877 0.880685 9.55023C1.08922 9.34169 1.347 9.23779 1.65402 9.23851H8.17089C8.47863 9.23851 8.73677 9.34278 8.94531 9.55132C9.15385 9.75986 9.25776 10.0176 9.25704 10.3247C9.25704 10.6324 9.15277 10.8905 8.94423 11.0991C8.73569 11.3076 8.47791 11.4115 8.17089 11.4108H1.65402ZM14.3076 13.9089L11.9724 11.5737C11.7733 11.3746 11.6737 11.1212 11.6737 10.8134C11.6737 10.5057 11.7733 10.2522 11.9724 10.0531C12.1715 9.85399 12.4206 9.75443 12.7197 9.75443C13.0187 9.75443 13.2765 9.85399 13.493 10.0531L15.0679 11.5737L18.9237 7.71791C19.1229 7.51878 19.3719 7.41922 19.671 7.41922C19.97 7.41922 20.2278 7.52783 20.4443 7.74506C20.6616 7.96229 20.7658 8.22478 20.7571 8.53252C20.7485 8.84026 20.6351 9.10274 20.4172 9.31997L15.8282 13.9089C15.6291 14.1081 15.3757 14.2076 15.0679 14.2076C14.7602 14.2076 14.5067 14.1081 14.3076 13.9089Z'
                          fill='#000'
                        />
                      </svg>
                      add to
                    </button>
                  </div>
                  <div className='flex gap-x-4 md:gap-x-8 mt-5'>
                    <span className='flex items-center gap-x-1.5 text-white/70 font-medium capitalize'>
                      <PiBookOpenTextBold className='text-[19px]' />
                      <span className='text-[.9rem]'>1023 chapters</span>
                    </span>
                    <span className='flex items-center gap-x-1.5 text-white/70 font-medium capitalize'>
                      <LuFlag className='text-[17px]' />
                      <span className='text-[.9rem]'>reports</span>
                    </span>
                  </div>

                  {/* Manga description */}
                  <div className='flex flex-col gap-y-4 text-[14px] mt-8 mb-5 text-white'>
                    <span className=''>
                      &quot;One Piece&quot; is a long-running Japanese manga and
                      anime series created by Eiichiro Oda. The story follows
                      the adventures of Monkey D. Luffy, a young pirate with a
                      dream to become the Pirate King and find the legendary
                      treasure known as One Piece. Luffy forms a diverse crew
                      called the Straw Hat Pirates, and together they set sail
                      on the Grand Line, a treacherous and mysterious sea.
                    </span>
                    <span className=''>
                      Throughout their journey, Luffy and his crew encounter a
                      wide range of characters, both friends and foes, and
                      explore various islands and locations in search of clues
                      about the location of One Piece. Along the way, they face
                      powerful enemies, engage in epic battles, and uncover the
                      dark secrets of the world they inhabit.
                    </span>
                    <span className=''>
                      The series is known for its vibrant and unique characters,
                      each with their own distinct personalities, abilities, and
                      backstories. Luffy&apos;s crew includes skilled swordsman
                      Roronoa Zoro, navigator and thief Nami, sharpshooter and
                      liar Usopp, master chef Sanji, doctor and shape-shifting
                      reindeer Tony Tony Chopper, archaeologist Nico Robin,
                      shipwright Franky, musician and living skeleton Brook, and
                      the mysterious warrior Jinbe.
                    </span>
                  </div>
                </div>

                <div className='flex first:gap-x-6 gap-x-3 items-center mt-14'>
                  <h5 className='text-base text-main2-brand'>Share</h5>
                  <span className='w-7 h-7 rounded-full bg-gray-400'></span>
                  <span className='w-7 h-7 rounded-full bg-gray-400'></span>
                  <span className='w-7 h-7 rounded-full bg-gray-400'></span>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center py-14 px-7 w-full h-full max-w-[410px] min-w-[410px] bg-white/50 text-white text-sm font-medium'>
              Japanese: ONE PIECE <br /> <br />
              Synonyms: OP Aired: Oct 20, 1999 to ? <br /> <br />
              Premiered: Fall 1999 <br /> <br />
              Duration: 24m <br /> <br />
              Status: Currently Ongoing MAL <br /> <br />
              Score: 8.62 <br /> <br />
              Genres: Action Adventure Comedy Drama Fantasy Shounen <br />{" "}
              <br />
              Super Power Studios: Toei Animation <br /> <br />
              Producers: Fuji TV, TAP, Shueisha, Toei Animation, Funimation,
              4Kids Entertainment <br /> <br />
            </div>
          </div>
        </div>

        <div className='flex flex-col px-[72px] py-14'>
          <div className='flex flex-col justify-center'>
            <span className='font-bold text-black dark:text-white text-2xl capitalize'>
              1064 CHAPTERS
            </span>
            <span className='text-main2-brand dark:text-main2-brand/80 text-sm first-letter:capitalize'>
              Last updated 10hrs ago
            </span>
          </div>
          <div className='flex justify-between gap-x-24 w-full h-full my-10'>
            <div className='flex flex-col w-full max-w-[932px] max-h-[1200px] gap-4 py-4 px-4 bg-[#F3F3F3] overflow-y-scroll'>
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
              <Chapters volume='volume 1' date='27th of jun 2022' />
            </div>
            <div className='flex flex-col max-w-[413px] min-w-[413px]'>
              <span className='text-black dark:text-white text-xl first-letter:capitalize'>
                you may also like
              </span>

              <div className='flex flex-col gap-y-20 justify-center mt-5'>
                <div className='px-4 py-2 flex flex-col w-full'>
                  <span className='text-dark dark:text-light text-sm capitalize mb-8'>
                    Weekly Ratings
                  </span>

                  <ul className='flex flex-col space-y-6'>
                    <RatingCard
                      index={1}
                      title='Shingeki no Kyogin...'
                      subTitle=' 紗子 Thriller'
                      imageSrc={Img2}
                    />
                    <RatingCard
                      index={2}
                      title='Shingeki no Kyogin...'
                      subTitle=' 紗子 Thriller'
                      imageSrc={Img2}
                    />
                    <RatingCard
                      index={3}
                      title='Shingeki no Kyogin...'
                      subTitle=' 紗子 Thriller'
                      imageSrc={Img2}
                    />
                    <RatingCard
                      index={4}
                      title='Shingeki no Kyogin...'
                      subTitle=' 紗子 Thriller'
                      imageSrc={Img2}
                    />
                    <RatingCard
                      index={5}
                      title='Shingeki no Kyogin...'
                      subTitle=' 紗子 Thriller'
                      imageSrc={Img2}
                    />
                  </ul>
                </div>

                <div className='px-4 py-2 flex flex-col w-full'>
                  <span className='text-dark dark:text-light text-sm capitalize mb-8'>
                    Top Genres
                  </span>

                  <ul className='flex flex-col space-y-6'>
                    <RatingCard
                      index={1}
                      title='Shingeki no Kyogin...'
                      subTitle=' 紗子 Thriller'
                      imageSrc={Img2}
                    />
                    <RatingCard
                      index={2}
                      title='Shingeki no Kyogin...'
                      subTitle=' 紗子 Thriller'
                      imageSrc={Img2}
                    />
                    <RatingCard
                      index={3}
                      title='Shingeki no Kyogin...'
                      subTitle=' 紗子 Thriller'
                      imageSrc={Img2}
                    />
                    <RatingCard
                      index={4}
                      title='Shingeki no Kyogin...'
                      subTitle=' 紗子 Thriller'
                      imageSrc={Img2}
                    />
                    <RatingCard
                      index={5}
                      title='Shingeki no Kyogin...'
                      subTitle=' 紗子 Thriller'
                      imageSrc={Img2}
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='my-14 px-[72px]'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <span className='flex items-center font-medium text-base text-black/70 dark:text-white/70 font-montserrat mr-3'>
                <Message className='text-main2-brand !text-2xl mr-1.5' />
                40.4K Comments
              </span>
              <div className='w-0.5 h-5 bg-black/80 dark:bg-white/80'></div>
              <span className='flex items-center font-medium text-base text-black/70 dark:text-white/70 font-montserrat ml-3'>
                <Star className='text-main2-brand !text-2xl mr-1.5' />
                9.5 (204.5k)
              </span>
            </div>

            <div className='flex items-center gap-x-10'>
              <span className='text-lg text-black/80 dark:text-white/80 capitalize cursor-pointer'>
                sort by
              </span>
              <span className='text-lg text-black/80 dark:text-white/80 capitalize cursor-pointer'>
                filter
              </span>
            </div>
          </div>
          <div className='flex flex-col bg-[#FAFAFA] dark:bg-white/[8%] p-4 space-y-5 my-4'>
            <CommentCard1 />
            <CommentInput
              placeholder='Leave your comments'
              onSubmit={handleSubmit}
              value={commentValue}
              onChange={(e: any) => setCommentValue(e)}
            />
            <div>
              <div className='space-y-6'>
                {commentData.slice(0, visibleComments).map((comment, index) => (
                  <CommentLayout key={index} {...comment} />
                ))}
              </div>
              {visibleComments < commentData.length && (
                <button
                  className='text-main-brand text-lg font-bold mt-4 cursor-pointer'
                  onClick={loadMoreComments}
                >
                  See More Comments
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Swiper Section */}
        <MangaSwiper
          title='more like this'
          items={swipData}
          navigationLink='/mangas/'
          pagination={false}
        />
      </div>
    </Layout>
  );
};

export default Index;
