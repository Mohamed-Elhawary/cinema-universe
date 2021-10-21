import { RiMovie2Fill } from "react-icons/ri";
import { CustomizedLogo } from "styles";

const Logo = ({ className }) => {
    
    return (
        <CustomizedLogo className={className}>
            <span>CINEMA</span>
            <span className="ml-1 p-1">UNIVERSE</span>
            <RiMovie2Fill size={className === "mini" ? 14 : 20} className="ml-1"/>
        </CustomizedLogo>
    );

}

export default Logo;