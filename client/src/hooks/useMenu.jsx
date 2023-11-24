import React, { useRef, useState } from "react";

const useMenu = () => {
  const menu = useRef(false);
  const [showMenu,setShowMenu] = useState(false)


  const handleMenu =(event)=>{
   
    if (event.target.name === 'menu') {
        // menu.current.style.backgroundColor='none'
        setShowMenu(true)        
      return  menu.current.style.rotate='90deg'
    }
    menu.current.style.rotate='0deg'
    

}



	return {handleMenu,menu, showMenu,setShowMenu};
};

export default useMenu;
