import React, { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";


export default function Header() {
  return (
    <header className='fixed top-0 right-0 flex flex-col items-center px-4 py-2 bg-main-brand text-light h-fit w-full mx-auto my-auto'>
      <div className='container'>
        <MobileHeader />
        <DesktopHeader />
      </div>
    </header>
  );
}
