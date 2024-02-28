import { MdOutlineBed } from "react-icons/md";
import Navbar from "../components/Navbar";
import { FaBath } from "react-icons/fa";
import { LuParkingSquare } from "react-icons/lu";
import BtnPrimary from "../components/BtnPrimary";
import Footer from "../components/Footer";
import ImgSlider from "../components/ImgSlider";

const Property = () => {
	return (
		<div className="text-xl">
			<Navbar />

			<div className="p-5 flex lg:flex-row flex-col gap-5">
				<div className="flex-1">
					<ImgSlider />
				</div>
				<div className="flex flex-col gap-4 justify-evenly">
					<h3 className="font-semibold">
						Exquisitely Finished & Spacious 5 Bedroom Semidetached
						Duplex...
					</h3>
					<h3 className="font-bold text-2xl text-primary">
						#95,000,000
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

			<h1 className="font-bold text-3xl text-center p-8">
				Property Description
			</h1>
			<div className="m-5 p-2 px-5 flex flex-row items-center gap-5 border border-primary rounded-lg w-fit">
				<span className="flex flex-col items-center px-2 border-r border-primary">
					<MdOutlineBed className="text-primary" />
					<div>4 Bedrooms</div>
				</span>
				<span className="flex flex-col items-center px-2 border-r border-primary">
					<FaBath className="text-primary" /> <div>4 Bathrooms</div>
				</span>
				<span className="">
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

				<div className="flex flex-row">
					<div>
						<h2 className="text-2xl font-semibold">Like This Property?</h2>
						<div>
							Quality is never an accident, it is always the
							result of intelligent effort. Here are some of our
							recent building projects
						</div>
						<BtnPrimary white text="Contact Us" />
					</div>

					<div>
						<img src="" alt="" />
						<img src="" alt="" />
						<img src="" alt="" />
						<img src="" alt="" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Property;
