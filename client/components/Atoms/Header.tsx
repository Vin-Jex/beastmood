import React, { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";


export default function Header() {
  return (
    <header className='sticky top-0 right-0 flex flex-col items-center p-4 bg-main-brand text-light h-full w-full'>
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
}
