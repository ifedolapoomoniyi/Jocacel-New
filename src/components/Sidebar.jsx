import Logo from "../assets/logo.png";
import { IoPeopleOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleCloseNav = () => {
		setIsNavOpen(!isNavOpen);
	};
	return (
		<div
			className={
				isNavOpen
					? "bg-white flex flex-col md:flex-row md:justify-between md:items-center h-full md:h-auto z-10 fixed left-0 w-[315px] md:static md:w-auto transition-all duration-500"
					: "bg-white flex flex-col md:flex-col md:min-w-[250px] h-full md:h-auto z-10 fixed left-[-100%] w-[315px] md:static md:w-auto transition-all duration-500"
			}
		>
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
				<NavLink
					to="/dashboard"
					end
					className={({ isActive }) => {
						return isActive
							? "hover:bg-primary hover:text-white flex gap-2 items-center p-1 bg-primary text-white"
							: "hover:bg-primary hover:text-white flex gap-2 items-center p-1";
					}}
				>
					<TbLayoutDashboard />
					Dashboard
				</NavLink>
				<NavLink
					to="/dashboard/team"
					className={({ isActive }) => {
						return isActive
							? "hover:bg-primary hover:text-white flex gap-2 items-center p-1 bg-primary text-white"
							: "hover:bg-primary hover:text-white flex gap-2 items-center p-1";
					}}
				>
					<IoPeopleOutline />
					Team Members
				</NavLink>
				<NavLink
					to="/dashboard/real-estate"
					className={({ isActive }) => {
						return isActive
							? "hover:bg-primary hover:text-white flex gap-2 items-center p-1 bg-primary text-white"
							: "hover:bg-primary hover:text-white flex gap-2 items-center p-1";
					}}
				>
					<MdOutlineRealEstateAgent />
					Real Estate
				</NavLink>
				<NavLink
					to="/dashboard/gallery"
					className={({ isActive }) => {
						return isActive
							? "hover:bg-primary hover:text-white flex gap-2 items-center p-1 bg-primary text-white"
							: "hover:bg-primary hover:text-white flex gap-2 items-center p-1";
					}}
				>
					<GoProjectRoadmap />
					Projects
				</NavLink>
				<NavLink
					to="/"
					className="hover:bg-red-600 hover:text-white flex gap-2 items-center p-1 mt-10 "
				>
					<LuLogOut />
					Log Out
				</NavLink>
			</div>
		</div>
	);
};

export default Sidebar;
