import { IoPeopleOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { MdHouse } from "react-icons/md";


import { AdminProject, AdminRealEstate, Sidebar, TopBar } from "../components";

import { RealEstateImg, RealEstate1 } from "../assets";
import { useState } from "react";
import { BASE_URL } from "../utils";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
	const [teamData, setTeamData] = useState([]);
	const [projects, setProjects] = useState([]);
	const lastProject = projects.length - 1;
	const Fetch = async () => {
		const res = await fetch(`${BASE_URL}/team`);
		const data = await res.json();
		setTeamData(data);
		console.log(data);
	};
	const FetchRealEstate = async () => {
		const res = await fetch(`${BASE_URL}/projects/`);
		const data = await res.json();
		setProjects(data);
		console.log(data);
	};
	useEffect(() => {
		Fetch();
		FetchRealEstate();
	}, []);
	return (
		<motion.div className="flex w-full md:text-xl">
			<Sidebar />

			<div className="p-5">
				<TopBar />
				<div className="flex flex-row flex-wrap items-center justify-center gap-4 lg:justify-normal">
					<div className="dashBg text-white w-[232px] h-[140px] p-3 py-6 flex flex-col justify-between">
						<IoPeopleOutline />
						<div>Team Members</div>
						<div>{teamData.length}</div>
					</div>
					<div className="dashBg2 text-white w-[232px] h-[140px] p-3 py-6 flex flex-col justify-between">
						<MdHouse />
						<div>Real Estate Properties</div>
					</div>
					<div className="dashBg3 text-white w-[232px] h-[140px] p-3 py-6 flex flex-col justify-between">
						<GoProjectRoadmap />
						<div>Projects</div>
						<div>{projects.length}</div>
					</div>
				</div>

				{/* Cards */}
				<div className="flex flex-wrap justify-center gap-5 m-3 md:m-10 md:justify-normal">
					<AdminProject
						image={RealEstate1}
						text={projects?.[lastProject]?.details}
					/>

					<AdminRealEstate
						text={
							"Exquisitely Finished & Spacious 5 Bedroom Semidetached Duplex"
						}
						location={
							"12 Shodamola Street, Ajoke Estate, Fagba, Lagos"
						}
						rooms={"4"}
						bathrooms={"4"}
						parking={"6"}
						image={RealEstateImg}
						price={"95,000,000"}
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Dashboard;
