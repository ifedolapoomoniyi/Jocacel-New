import BtnPrimary from "../components/BtnPrimary";
import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";
import TeamImg from "../assets/TeamImg.png";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { BASE_URL } from "../utils";

const Team = () => {
	const [teamData, setTeamData] = useState([]);

	const Fetch = async () => {
		const res = await fetch(`${BASE_URL}/team`);
		const data = await res.json();
		setTeamData(data);
		console.log(data);
	};

	useEffect(() => {
		Fetch();
	}, []);
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
			className="text-xl"
		>
			<Navbar />

			<div className="team-hero text-white flex flex-col items-center justify-center h-screen">
				<h1 className="text-4xl font-bold px-10">About Us</h1>
				<div className="p-4">
					A very high value is attached to reliable and competent
					personnel. They are the greatest assets that we require
				</div>
				<BtnPrimary text={"Contact Us"} arrow />
			</div>

			{/* Meet the team */}
			<div className="p-10 flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-center pb-4">
					Meet The Team
				</h1>
				<p>
					Training of all categories of our personnel is with high
					premium to keep all members well informed in their
					corresponding sections.
				</p>
				<p>
					KADAF Board of Directors currently comprises of a Chief
					Executive Officer, one Executive Director and Partners with
					other sectional heads like Civil/Structural Engineers,
					Mechanical Engineers, Electrical Engineers, Real Estate
					Surveyors, Draughts men, Town Planner, Land and
					Geo-informatics surveyors, Quantity Surveyors, HSE
					personnel, Steel Fabricators and other skilled and unskilled
					workers.
				</p>

				<p>
					We acquire more staffs in the firm as the number of our
					projects increases. We also partner with other construction
					firms, engineering firms and some architectural firms on
					various types of projects to ensure our quality and valuable
					delivery.
				</p>
			</div>

			{/* Team cards */}
			<div className="flex flex-row flex-wrap gap-5 items-center justify-center p-10">
				{teamData.map((team) => (
					<TeamCard
						key={team._id}
						name={team.name}
						title={team.role}
						route={`/team/${team._id}`}
						text={team.description}
						image={TeamImg}
					/>
				))}
			</div>

			<Footer />
		</motion.div>
	);
};

export default Team;
