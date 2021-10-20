import { Logo } from 'ui';
import { CustomizedFooter } from 'styles';

const Footer = () => {

    return (
      	<CustomizedFooter>
			<div className="copyright">
                All Rights are reserved &copy; {new Date().getFullYear()}, <Logo className="mini" />
                <p className="author">Made by: <a href="https://github.com/Mohamed-Elhawary" target="_blank">HaWaRy</a></p> {/* eslint-disable-line */}
            </div>
		</CustomizedFooter>
    );
}

export default Footer;