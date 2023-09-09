import React, { useState } from "react";
import emojilib from "emojilib";
import { EmojiEmotions } from "@mui/icons-material";

interface CommentInputProps {
  placeholder?: string;
  maxEmojis?: number;
  onSubmit: (value: string) => void; // Callback for form submission
  value: string; // Value for the input field
  onChange: (value: string) => void; // Callback for input value change
}

const CommentInput: React.FC<CommentInputProps> = ({
  placeholder = "Leave your comment here",
  maxEmojis = 10,
  onSubmit,
  value,
  onChange,
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  const handleEmojiClick = (emoji: string) => {
    // Update the input value
    onChange(value + emoji);
  };

  const allEmojis = Object.keys(emojilib).slice(0, maxEmojis);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger the onSubmit callback with the current value
    onSubmit(value);
  };

  return (
    <form
      className='w-full h-full relative p-0 bg-transparent'
      onSubmit={handleSubmit}
    >
      <textarea
        className='bg-[#D9D9D9] placeholder:text-dark text-dark dark:text-dark border outline-none px-4 py-3 rounded-md resize-none h-20 w-full'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)} // Update the input value
      />

      <button
        className='text-gray-500 hover:text-gray-700 focus:outline-none rounded-lg p-2 absolute top-1/2 -translate-y-[60%] right-4'
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
      >
        <EmojiEmotions className='h-6 w-6' />
      </button>

      {showEmojiPicker && (
        <div className='flex flex-wrap gap-2 py-2 px-2 bg-white dark:bg-dark rounded-lg absolute top-20 z-[100] max-h-[7.5rem] overflow-x-hidden overflow-y-scroll'>
          {allEmojis.map((emoji) => (
            <button
              key={emoji}
              className='flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/20 rounded py-1 px-2 cursor-pointer text-2xl text-center'
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </form>
  );
};

export default CommentInput;
