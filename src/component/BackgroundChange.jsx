import React from 'react'
import terminalImages from '../assets/terminal';

const BackgroundChange = ({heroCount})  => {
 const baseClasses =
    "absolute inset-0 w-full h-full object-cover object-center z-0 transition-opacity duration-1000 opacity-100";

 

  if (heroCount === 0) return <img src={terminalImages[0]} className={baseClasses} />;
  if (heroCount === 1) return <img src={terminalImages[1]} className={baseClasses} />;
  if (heroCount === 2) return <img src={terminalImages[2]} className={baseClasses} />;
  ;
  return null;
}

export default BackgroundChange