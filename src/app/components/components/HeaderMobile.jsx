import { useEffect, useRef, useState } from "react";
import Burger from "./Burger";
import Menu from "./BurgerMenu";


export default function HeaderMobile(){
  const [open, setOpen] = useState(false);
  const node = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (node.current && !node.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [node]);

  return (
    <header className={`lg:hidden bg-black h-[10vh] w-[100vw] flex items-center fixed z-[444] p-[20px] md:p-[5vw]`} ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
    </header>
  );
};