import { IoPeopleOutline } from "react-icons/io5";
import Sidebar from "../components/Sidebar";
import { MdHouse } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import AdminProject from "../components/AdminProject";
import RealEstate1 from "../assets/RealEstate1.png";
import AdminRealEstate from "../components/AdminRealEstate";
import RealEstateImg from "../assets/RealEstateImg.png";
import TopBar from "../components/TopBar";
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
		<motion.div className="text-xl flex w-full">
			<Sidebar />

			<div className="p-5">
				<TopBar />
				<div className="flex flex-row flex-wrap gap-4 items-center justify-center lg:justify-normal">
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
				<div className="flex gap-5 flex-wrap m-10">
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
