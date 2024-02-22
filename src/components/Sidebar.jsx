import Logo from "../assets/logo.png";
import { IoPeopleOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";

const Sidebar = () => {
	return (
		<div className="w-[250px]">
			<div>
				<img src={Logo} alt="" />
			</div>

			<div className="flex flex-col gap-3 p-4">
				<span className="hover:bg-primary hover:text-white flex gap-2 items-center p-1">
					<TbLayoutDashboard />
					Dashboard
				</span>
				<span className="hover:bg-primary hover:text-white flex gap-2 items-center p-1">
					<IoPeopleOutline />
					Team Members
				</span>
				<span className="hover:bg-primary hover:text-white flex gap-2 items-center p-1">
					<MdOutlineRealEstateAgent />
					Real Estate
				</span>
				<span className="hover:bg-primary hover:text-white flex gap-2 items-center p-1">
					<GoProjectRoadmap />
					Projects
				</span>
				<span className="hover:bg-primary hover:text-white flex gap-2 items-center p-1 mt-10 ">
					<LuLogOut />
					Log Out
				</span>
			</div>
		</div>
	);
};

export default Sidebar;
