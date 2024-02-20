import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PropertyImg1 from "../assets/PropertyImg1.png";

const ImgSlider = () => {
	return (
		<Carousel autoPlay infiniteLoop interval={3000}>
			<div>
				<img src={PropertyImg1} alt="" />
			</div>
			<div>
				<img src={PropertyImg1} alt="" />
			</div>
			<div>
				<img src={PropertyImg1} alt="" />
			</div>
			<div>
				<img src={PropertyImg1} alt="" />
			</div>
		</Carousel>
	);
};

export default ImgSlider;
