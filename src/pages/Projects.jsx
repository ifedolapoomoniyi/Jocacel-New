import { BtnPrimary, Footer, Gallery, Navbar } from "../components";
import { PropertyImg1, HouseImg } from "../assets";

import { useState, useEffect } from "react";
import { BASE_URL } from "../utils";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

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
		<motion.div
			className="text-xl"
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
		>
			<Navbar />

			{/* Hero */}
			<div className="flex flex-col items-center justify-center h-screen p-4 text-white gallery-hero">
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

			<h2 className="p-10 text-3xl font-bold">Past Projects</h2>

			<div className="flex flex-row flex-wrap items-center justify-center gap-5 p-5 pb-10 md:justify-normal">
				<Gallery
					details={
						"Construction of 5 Bedroom Duplex Private Development at Sango Ota, Ogun State"
					}
					image={PropertyImg1}
				/>

				{teamData.map((project) => (
					<Gallery
						key={project._id}
						details={project.details}
						image={project.image}
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
			<div className="p-5 w-[75%] lg:w-[65%] green-black-gradient m-auto rounded-xl text-white flex items-center flex-col relative">
				<div className="max-w-[400px] m-auto flex flex-col items-center z-10">
					<h3 className="py-3 text-xl font-bold md:text-2xl">
						Like Our Work?
					</h3>
					<div>
						Quality is never an accident, it is always the result of
						intelligent effort. Here are some of our recent building
						projects
					</div>
					<Link
						to="/contact"
						className="flex flex-row p-1 px-2 my-3 mb-5 bg-white rounded-md text-primary hover:animate-pulse"
					>
						Contact Us <GoArrowRight />
					</Link>
				</div>
				<div>
					<img
						src={HouseImg}
						alt=""
						className="relative h-40 scale-150 sm:scale-100 sm:absolute sm:h-52 bottom-7 right-2"
					/>
				</div>
			</div>

			<Footer />
		</motion.div>
	);
};

export default Projects;
