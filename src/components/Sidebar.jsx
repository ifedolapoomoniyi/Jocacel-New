import Logo from "../assets/logo.png";
import { IoPeopleOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleCloseNav = () => {
		setIsNavOpen(!isNavOpen);
	};
	return (
		<div className="w-[250px] z-[400] h-full min-w-[250px] hidden lg:block">
			<div
				className={isNavOpen ? "hamburger active" : "hamburger"}
				onClick={handleCloseNav}
			>
				<span className="bar side"></span>
				<span className="bar side"></span>
				<span className="bar side"></span>
			</div>

			<div>
				<img src={Logo} alt="" />
			</div>

			<div className="flex flex-col gap-3 p-4">
				<Link
					to="/dashboard"
					className="hover:bg-primary hover:text-white flex gap-2 items-center p-1"
				>
					<TbLayoutDashboard />
					Dashboard
				</Link>
				<Link
					to="/dashboard/team"
					className="hover:bg-primary hover:text-white flex gap-2 items-center p-1"
				>
					<IoPeopleOutline />
					Team Members
				</Link>
				<Link to="/dashboard/real-estate" className="hover:bg-primary hover:text-white flex gap-2 items-center p-1">
					<MdOutlineRealEstateAgent />
					Real Estate
				</Link>
				<Link
					to="/dashboard/gallery"
					className="hover:bg-primary hover:text-white flex gap-2 items-center p-1"
				>
					<GoProjectRoadmap />
					Projects
				</Link>
				<Link
					to="/"
					className="hover:bg-red-600 hover:text-white flex gap-2 items-center p-1 mt-10 "
				>
					<LuLogOut />
					Log Out
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
