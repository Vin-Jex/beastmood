import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import {
  ExpandMore,
  MoreHoriz,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
  TurnRight,
} from "@mui/icons-material";
import CommentInput from "./CommentInput";

export interface CommentLayoutTypes {
  userProfile: string | StaticImageData;
  userName: string;
  comment: string;
  commentDate: string | Date;
  replies: CommentLayoutTypes[];
  likes: number | string;
}

const CommentLayout: React.FC<CommentLayoutTypes> = ({
  userProfile,
  userName,
  comment,
  commentDate,
  replies,
  likes,
}) => {
  const [showReplies, setShowReplies] = useState(false);
  const [likeCount, setLikeCount] = useState(Number(likes));
  const [dislikeCount, setDislikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [repliesData, setRepliesData] = useState<CommentLayoutTypes[]>([]);
  const [showReplyForm, setShowReplyForm] = useState(false);

  const toggleReplies = () => {
    setShowReplies((prevShowReplies) => !prevShowReplies);
  };

  const handleLike = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
      if (disliked) {
        setDislikeCount(dislikeCount - 1);
        setDisliked(false);
      }
    } else {
      setLikeCount(likeCount - 1);
      setLiked(false);
    }
  };

  const handleDislike = () => {
    if (!disliked) {
      setDislikeCount(dislikeCount + 1);
      setDisliked(true);
      if (liked) {
        setLikeCount(likeCount - 1);
        setLiked(false);
      }
    } else {
      setDislikeCount(dislikeCount - 1);
      setDisliked(false);
    }
  };

  // Format the commentDate to a string
  const formattedCommentDate =
    typeof commentDate === "string"
      ? commentDate
      : commentDate.toLocaleString();

  const handleReplySubmit = () => {
    // Validate replyText to ensure it's not empty
    if (replyText.trim() !== "") {
      // Create a new reply object
      const newReply = {
        userProfile: userProfile,
        userName: "Your Name",
        comment: replyText,
        commentDate: new Date(),
        replies: [],
        likes: 0,
      };

      // Add the new reply to the existing replies data
      setRepliesData([...repliesData, newReply]);

      // Clear the reply text input
      // setReplyText("");
    }
  };

  return (
    <div className='block text-dark space-y-3'>
      <div className='flex items-center gap-x-3'>
        <Image
          src={userProfile}
          alt='user profile'
          className='w-8 h-8 rounded-full bg-gray-500/50'
        />
        <span className='font-medium text-black dark:text-white font-montserrat text-base h-full'>
          {userName}
        </span>
        <span className='text-sm text-dark/70 dark:text-gray2 font-montserrat'>
          {formattedCommentDate}
        </span>
      </div>

      <p className='text-black/70 dark:text-white/80 text-[1rem] max-w-[1260px]'>
        {comment}
      </p>

      {showReplyForm && (
        <CommentInput
          placeholder="Leave your reply"
          onSubmit={handleReplySubmit}
          value={replyText}
          onChange={(newValue) => setReplyText(newValue)}
        />
      )}

      <div className='flex items-center gap-x-6 text-[#8991A0]'>
        <span className='text-[13px] text-[#8991A0] font-bold font-montserrat capitalize'>
          {likeCount - dislikeCount} likes
        </span>
        <span
          className='flex items-center gap-x-1.5 text-[13px] text-[#8991A0] font-bold font-montserrat capitalize cursor-pointer'
          onClick={handleLike}
        >
          <ThumbUpAltOutlined
            className={`text-xl ${liked ? "text-main-brand" : ""}`}
          />
          {likeCount}
        </span>
        <span
          className='flex items-center gap-x-1.5 text-[13px] text-[#8991A0] font-bold font-montserrat capitalize cursor-pointer'
          onClick={handleDislike}
        >
          <ThumbDownAltOutlined
            className={`text-xl ${disliked ? "text-red-500" : ""}`}
          />
          {dislikeCount}
        </span>
        <span
          className='flex items-center gap-x-1.5 text-[13px] text-[#8991A0] font-bold font-montserrat capitalize cursor-pointer'
          onClick={() => setShowReplyForm(!showReplyForm)}
        >
          <TurnRight className='text-xl' />
          reply
        </span>

        <div className='flex items-center justify-center gap-x-1 text-[#8991A0] font-bold font-montserrat capitalize cursor-pointer'>
          <span className='flex items-center gap-x-0.5 text-[13px]'>
            <MoreHoriz className='text-2xl' />
            more
          </span>
        </div>
      </div>
      {showReplies && (
        <div className='ml-8 my-4 space-y-4'>
          {replies.map((reply, index) => (
            <CommentLayout key={index} {...reply} />
          ))}
        </div>
      )}

      {replies.length > 0 && (
        <span
          className='flex items-center gap-x-0.5 text-main-brand text-[16px] first-letter:uppercase w-full cursor-pointer'
          onClick={toggleReplies}
        >
          {showReplies
            ? `Hide ${replies.length} replies`
            : `View ${replies.length} replies`}
          <ExpandMore className='text-[25px]' />
        </span>
      )}
    </div>
  );
};

export default CommentLayout;
