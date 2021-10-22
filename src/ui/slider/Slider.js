import chevronForward from 'assets/images/arrow-right.svg';
import chevronBack from 'assets/images/arrow-left.svg';
import { CustomizedSlider } from "styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = ({ isLandscapeSlider, isMovieModalSlider, children }) => {

    const settings = {
		arrows: !isLandscapeSlider,
		autoplay: isLandscapeSlider,
		pauseOnHover: isLandscapeSlider,
		centerMode: !isMovieModalSlider,
		centerPadding: !isMovieModalSlider ? "120px" : 0,
        slidesToShow: isLandscapeSlider ? 1 : isMovieModalSlider ? 4 : 5,
        slidesToScroll: 1,
        dots: isLandscapeSlider,
        infinite: !isMovieModalSlider,
        speed: 500,
		autoplaySpeed: 6000,
        responsive: [
            {
				breakpoint: 1300,
				settings: {
					centerPadding: "100px",
				}
            },
            {
				breakpoint: 1190,
				settings: {
					slidesToShow: isLandscapeSlider ? 1 : 4,
					centerPadding: "90px",
				}
            },
			{
				breakpoint: 991,
				settings: {
					slidesToShow: isLandscapeSlider ? 1 : 3,
					centerPadding: "80px",
				}
            },
            {
				breakpoint: 767,
				settings: {
					slidesToShow: isLandscapeSlider ? 1 : !isMovieModalSlider ? 2 : 3,
					centerPadding: "70px",
					dots: false
				}
            },
            {
				breakpoint: 600,
				settings: {
					slidesToShow: isLandscapeSlider ? 1 : !isMovieModalSlider ? 2 : 3,
					centerPadding: "65px",
					dots: false 
				}
            },
            {
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					infinite: true,
					centerMode: true,
					centerPadding: !isMovieModalSlider ? "70px" : "82px",
					dots: false
				}
            }
        ],
        nextArrow: <img src={chevronForward} alt="next_arrow" />,
        prevArrow: <img src={chevronBack} alt="prev_arrow" />
    }


    return <CustomizedSlider {...settings}>{children}</CustomizedSlider>;
}

export default Slider;