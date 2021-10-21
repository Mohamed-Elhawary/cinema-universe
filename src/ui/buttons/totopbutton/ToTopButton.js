import { useRef } from 'react';
import { BsChevronUp } from "react-icons/bs";
import { CustomizedToTopButton } from "styles";

const BackToTopButton = () => {

    const toTopBtn = useRef(null);
    
    function scrollTo(where) {

        window.scroll({

          behavior: 'smooth',
          left: 0,
          top: where

        });
    }

    window.addEventListener("scroll", () => {

        let btn = toTopBtn.current;
        
        if(btn) {
        
            if (window.pageYOffset >= 800) {

                btn.style.display = "block"
            
            } else {
            
                btn.style.display = "none"
            
            }

        }

    });

    return <CustomizedToTopButton onClick={() => scrollTo(0)} ref={toTopBtn}><BsChevronUp size={22} /></CustomizedToTopButton>;
}

export default BackToTopButton;