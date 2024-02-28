import Avatar from "../assets/Avatar.png";

const TopBar = () => {
	return (
		<div className="flex flex-row justify-between mb-3 p-5 w-full">
			<div>
				<h2>Admin Panel</h2>
				<div className="text-sm text-gray-600">
					Control everything here
				</div>
			</div>
			<div className="flex flex-row gap-2 items-center">
				<img src={Avatar} alt="" />
				<span className="flex flex-col">
					<span className="font-semibold">Abolarin Fakeye</span>
					<span className="text-base">Admin</span>
				</span>
			</div>
		</div>
	);
};

export default TopBar;
