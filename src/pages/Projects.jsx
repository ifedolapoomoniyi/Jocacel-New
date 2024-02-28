import BtnPrimary from "../components/BtnPrimary";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import PropertyImg1 from "../assets/PropertyImg1.png";
import RealEstateImg from "../assets/RealEstateImg.png";
import Footer from "../components/Footer";
import { useState } from "react";
import { BASE_URL } from "../utils";
import { useEffect } from "react";

const Projects = () => {
	const [teamData, setTeamData] = useState([]);
	const Fetch = async () => {
		const res = await fetch(`${BASE_URL}/projects`);
		const data = await res.json();
		setTeamData(data);
		console.log(data);
	};
	useEffect(() => {
		Fetch();
	}, []);

	return (
		<div className="text-xl">
			<Navbar />

			{/* Hero */}
			<div className="gallery-hero text-white h-screen flex flex-col items-center justify-center p-4">
				<h1 className="p-4 text-3xl font-bold text-center">
					Our Projects Gallery
				</h1>
				<div className="max-w-[700px] p-2 pb-0">
					Here is a gallery of our past projects for different
					clients.{" "}
				</div>
				<div className="p-2">Kadaf, the Home Builders!</div>
				<BtnPrimary text={"Contact Us"} arrow white />
			</div>

			{/* Past projects */}

			<h2 className="p-10 font-bold text-3xl">Past Projects</h2>

			<div className="flex flex-row gap-5 p-5 pb-10 flex-wrap items-center">
				{teamData.map((project) => (
					<Gallery
						key={project._id}
						details={project.details}
						image={RealEstateImg}
					/>
				))}
				
				<Gallery
					details={
						"Construction of 5 Bedroom Duplex Private Development at Sango Ota, Ogun State"
					}
					image={PropertyImg1}
				/>
			</div>

			{/* Contact us */}
			<div className="p-5"></div>

			<Footer />
		</div>
	);
};

export default Projects;
