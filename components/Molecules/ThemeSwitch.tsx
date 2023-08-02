import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LightMode, LightModeOutlined, ModeNight } from "@mui/icons-material";

const ThemeSwitch: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [addAnimate, setAddAnimate] = useState(false);
  const [themeColor, setThemeColor] = useState(true);

  const handleThemeColor = () => {};

  const themeColorToggle = themeColor ? "light" : "dark";

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    setAddAnimate(true);

    setTimeout(() => {
      setAddAnimate(false);
    }, 500);
  };

  const currentTheme = theme === "system" ? "systemTheme" : theme;
  return (
    <center className='h-screen flex flex-col space-y-4 items-center justify-center'>
      <h1 className='text-7xl font-bold text-center'>
        {currentTheme === "dark" ? "Dark" : "Light"}
        <span className='text-purple-600 ml-4'>Mode</span>
      </h1>
      <p className='dark:text-purple-600 text-center'>
        Click on the button to switch mode
      </p>
      <div>
        {currentTheme !== "dark" ? (
          <button
            className='bg-gray-100 hover:bg-gray-200 w-28 rounded-md border-2 border-purple-800 p-4'
            onClick={() => setTheme("dark")}
          >
            <ModeNight sx={{ fontSize: "2rem", color: "purple" }} />
          </button>
        ) : (
          <button
            className='bg-gray-900 hover:bg-black w-28 rounded-md border-2 border-purple-400 p-4'
            onClick={() => setTheme("light")}
          >
            <LightMode sx={{ fontSize: "2rem", color: "rgb(107 33 168)" }} />
          </button>
        )}
      </div>
    </center>
  );
};

export default ThemeSwitch;
