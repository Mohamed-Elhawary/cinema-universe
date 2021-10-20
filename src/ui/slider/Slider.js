import chevronForward from 'assets/images/arrow-right.svg';
import chevronBack from 'assets/images/arrow-left.svg';
import CustomizedSlider from "./SliderStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = ({ isLandscapeSlider, children }) => {

    const settings = {
		arrows: !isLandscapeSlider,
		autoplay: isLandscapeSlider,
		pauseOnHover: isLandscapeSlider,
		centerMode: true,
		centerPadding: "120px",
        slidesToShow: isLandscapeSlider ? 1 : 5,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
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
					slidesToShow: isLandscapeSlider ? 1 : 2,
					centerPadding: "70px",
				}
            },
            {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					infinite: true,
					centerMode: true,
					centerPadding: "60px"
				}
            }
        ],
        nextArrow: <img src={chevronForward} alt="next_arrow" />,
        prevArrow: <img src={chevronBack} alt="prev_arrow" />
    }


    return <CustomizedSlider {...settings}>{children}</CustomizedSlider>;
}

export default Slider;