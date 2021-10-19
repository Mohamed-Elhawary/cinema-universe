import { Logo } from 'ui';
import CustomizedFooter from './FooterStyle';

const Footer = () => {

    return (
      	<CustomizedFooter>
			<div className="copyright">
                All Rights are reserved &copy; {new Date().getFullYear()}, <Logo className="mini" />
                <p className="author">Made by: <a href="https://github.com/Mohamed-Elhawary" target="_blank">HaWaRy</a></p>
            </div>
		</CustomizedFooter>
    );
}

export default Footer;