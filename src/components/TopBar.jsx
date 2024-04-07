import { Avatar } from "../assets";

const TopBar = () => {
	return (
		<div className="flex flex-row justify-between w-full mb-3 text-sm md:text-base">
			<div>
				<h2>Admin Panel</h2>
				<div className="text-xs text-gray-600 md:text-sm">
					Control everything here
				</div>
			</div>
			<div className="flex flex-row items-center gap-1 md:gap-2">
				<img src={Avatar} alt="" />
				<span className="flex flex-col">
					<span className="font-semibold">Abolarin Fakeye</span>
					<span className="text-xs md:text-base">Admin</span>
				</span>
			</div>
		</div>
	);
};

export default TopBar;
