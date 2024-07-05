import { BtnPrimary, Footer, Navbar } from "../components";
import {
	Adeyemo_after_1,
	Adeyemo_after_corridor,
	Adeyemo_after_living,
	Adeyemo_after_stairs,
	Adeyemo_before,
	Adeyemo_before1,
	Adeyemo_before2,
	Adeyemo_before3,
	Adeyemo_toilet_after,
	Aladelola_after_bq,
	Aladelola_after_building,
	Aladelola_after_stairs,
	Aladelola_after_toilet,
	Aladelola_before_bq,
	Aladelola_before_building,
	Aladelola_before_corridor,
	Aladelola_before_toilet,
	HouseImg,
} from "../assets";

// import { useState, useEffect } from "react";
// import { BASE_URL } from "../utils";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
	// const [teamData, setTeamData] = useState([]);
	// const Fetch = async () => {
	// 	const res = await fetch(`${BASE_URL}/projects`);
	// 	const data = await res.json();
	// 	setTeamData(data);
	// 	console.log(data);
	// };
	// useEffect(() => {
	// 	Fetch();
	// }, []);

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

			{/* updated projects */}
			<div className="md:m-10 m-5">
				<h2 className="text-2xl my-5 font-semibold">
					Renovation of 3-bedroom duplex at 1, Aladelola Street,
					Ikosi-Ketu, Lagos.
				</h2>
				<div className="flex flex-col lg:flex-row gap-4 m-4 pb-10">
					<div className="flex-1">
						<div className="font-semibold italic">Before</div>
						{/* Carousel */}
						<Carousel infiniteLoop interval={5000}>
							<div>
								<img src={Aladelola_before_bq} alt="" />
							</div>
							<div>
								<img src={Aladelola_before_building} alt="" />
							</div>
							<div>
								<img src={Aladelola_before_corridor} alt="" />
							</div>
							<div>
								<img src={Aladelola_before_toilet} alt="" />
							</div>
						</Carousel>
					</div>
					<div className="flex-1 h-fit rounded-2xl">
						<div className="font-semibold italic">After</div>
						{/* Carousel */}
						<Carousel infiniteLoop interval={5000}>
							<div>
								<img src={Aladelola_after_bq} alt="" />
							</div>
							<div>
								<img src={Aladelola_after_building} alt="" />
							</div>
							<div>
								<img src={Aladelola_after_stairs} alt="" />
							</div>
							<div>
								<img src={Aladelola_after_toilet} alt="" />
							</div>
						</Carousel>
					</div>
				</div>

				<h2 className="text-2xl font-semibold my-5">
					Procurement and renovation of 4 bedroom duplex at 6A,
					Adeyemo Alakija, GRA, Ikeja, Lagos.
				</h2>
				<div className="flex flex-col lg:flex-row gap-4 m-4">
					<div className="flex-1 ">
						<div className="font-semibold italic">Before</div>
						{/* Carousel */}
						<Carousel infiniteLoop interval={5000}>
							<div className="h-[400px] flex items-center justify-center">
								<img src={Adeyemo_before} alt="" />
							</div>
							<div className="h-[400px] flex items-center justify-center">
								<img src={Adeyemo_before1} alt="" />
							</div>
							<div className="h-[400px] flex items-center justify-center">
								<img src={Adeyemo_before2} alt="" />
							</div>
							<div className="h-[400px] flex items-center justify-center">
								<img src={Adeyemo_before3} alt="" />
							</div>
						</Carousel>
					</div>

					<div className="flex-1">
						<div className="font-semibold italic">After</div>

						<Carousel infiniteLoop interval={5000}>
							<div className="h-[400px] flex items-center justify-center">
								<img src={Adeyemo_after_1} alt="" />
							</div>
							<div className="h-[400px] flex items-center justify-center">
								<img src={Adeyemo_after_corridor} alt="" />
							</div>
							<div className="h-[400px] flex items-center justify-center">
								<img src={Adeyemo_after_living} alt="" />
							</div>
							<div className="h-[400px] flex items-center justify-center">
								<img src={Adeyemo_toilet_after} alt="" />
							</div>
							<div className="h-[400px] flex items-center justify-center">
								<img src={Adeyemo_after_stairs} alt="" />
							</div>
						</Carousel>
					</div>
				</div>
			</div>

			{/* Old projects style */}
			{/* <div className="flex flex-row flex-wrap items-center justify-center gap-5 p-5 pb-10 md:justify-normal">
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
 */}

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
