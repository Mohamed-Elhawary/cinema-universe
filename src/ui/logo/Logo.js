import { RiMovie2Fill } from "react-icons/ri";
import CustomizedLogo from "./LogoStyle";

const Logo = () => {
    
    return (
        <CustomizedLogo>
            <span>CINEMA</span>
            <span>UNIVERSE</span>
            <RiMovie2Fill size={20} className="ml-1"/>
        </CustomizedLogo>
    );

}

export default Logo;