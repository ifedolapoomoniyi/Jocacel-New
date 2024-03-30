import { MdOutlineBed } from "react-icons/md";
import Navbar from "../components/Navbar";
import { FaBath } from "react-icons/fa";
import { LuParkingSquare } from "react-icons/lu";
import BtnPrimary from "../components/BtnPrimary";
import Footer from "../components/Footer";
import ImgSlider from "../components/ImgSlider";
import RealEstate1 from "../assets/RealEstate1.png";
import RealEstate2 from "../assets/RealEstate2.png";
import RealEstate3 from "../assets/RealEstate3.png";

const Property = () => {
	return (
		<div className="text-base md:text-xl">
			<Navbar />

			<div className="p-5 flex lg:flex-row flex-col gap-5">
				<div className="max-w-[700px]">
					<ImgSlider />
				</div>
				<div className="flex flex-col gap-4 justify-evenly lg:max-h-[450px]">
					<h3 className="font-semibold">
						Exquisitely Finished & Spacious 5 Bedroom Semidetached
						Duplex...
					</h3>
					<h3>
						<span className="font-bold text-2xl text-primary">
							#95,000,000
						</span>
						<p>For each duplex with their respective BQ</p>
					</h3>
					<div className="font-light text-primary">
						Location
						<div className="py-2 font-normal text-black">
							12 Shodamola Street, Ajoke Estate, Fagba, Lagos
						</div>
					</div>

					<div>Interested in this property?</div>
					<div>
						<BtnPrimary text="Let's Discuss" white />
					</div>
				</div>
			</div>

			<h1 className="font-bold text-2xl md:text-3xl text-center p-2 md:p-8">
				Property Description
			</h1>
			<div className="m-5 p-2 px-2 md:px-5 flex flex-row items-center gap-2 md:gap-5 border border-primary rounded-lg w-fit text-sm md:text-base">
				<span className="flex flex-col items-center px-2 border-r border-primary">
					<MdOutlineBed className="text-primary" />
					<div>4 Bedrooms</div>
				</span>
				<span className="flex flex-col items-center px-2 border-r border-primary">
					<FaBath className="text-primary" /> <div>4 Bathrooms</div>
				</span>
				<span className="flex flex-col items-center">
					<LuParkingSquare className="text-primary" />
					<div>6 Parking spaces</div>
				</span>
			</div>

			{/* Property description */}
			<div className="p-5">
				<div className="text-primary">Property Description</div>
				<p>
					The land has C of O, the building has Lagos state approval,
					every stage of building construction is signed off by
					relevant state buildin authorities
				</p>

				<div>Location</div>
				<p></p>

				<div>Size of Project</div>
				<p></p>

				<div>Description of Project</div>
				<p></p>

				<div>Please note</div>
				<p></p>

				<div className="flex flex-col md:flex-row py-10 gap-2">
					<div className="flex flex-col gap-2 items-baseline flex-1">
						<h2 className="text-2xl font-semibold">
							Like This Property?
						</h2>
						<div>
							Quality is never an accident, it is always the
							result of intelligent effort. Here are some of our
							recent building projects
						</div>
						<BtnPrimary white text="Contact Us" />
					</div>

					<div className="flex flex-row p-5 flex-1  items-center">
						<div>
							<img
								src={RealEstate1}
								alt=""
								className="relative"
							/>
						</div>
						<div>
							{" "}
							<img
								src={RealEstate2}
								alt=""
								className="relative top-10"
							/>
						</div>
						<div>
							{" "}
							<img
								src={RealEstate3}
								alt=""
								className="relative top-16"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Property;
