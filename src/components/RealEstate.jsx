import { Go } from "../assets";

import { MdOutlineBed } from "react-icons/md";
import { LuParkingSquare } from "react-icons/lu";
import { FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";

const RealEstate = ({
	location,
	name,
	rooms,
	bathrooms,
	parking,
	price,
	details,
	image,
}) => {
	return (
		<div className="flex flex-col justify-between gap-3 p-5 border-b-2 md:flex-row lg:p-10">
			<div className="max-w-[500px] flex flex-col gap-2 md:gap-3 flex-1">
				<div className="text-primary md:text-xl">{location}</div>
				<div className="text-xl md:text-2xl">{name}</div>
				<div className="hidden md:block">
					<div className="text-xl font-semibold">
						Property Features
					</div>
					<div className="flex flex-row items-center gap-2 px-2 text-base">
						<MdOutlineBed /> {rooms} Bedrooms
					</div>
					<div className="flex flex-row items-center gap-2 px-2 text-base">
						<FaBath /> {bathrooms} Bathrooms
					</div>
					<div className="flex flex-row items-center gap-2 px-2 text-base">
						<LuParkingSquare /> {parking} Parking spaces
					</div>
				</div>
			</div>

			{/* Image */}
			<div className="">
				<img src={image} alt="Property Image" className="h-[300px] rounded-xl px-2" />
			</div>

			<div className="md:hidden">
				<div className="text-lg font-semibold">Property Features</div>
				<div className="flex flex-row items-center gap-2 px-2 text-sm">
					<MdOutlineBed /> {rooms} Bedrooms
				</div>
				<div className="flex flex-row items-center gap-2 px-2 text-sm">
					<FaBath /> {bathrooms} Bathrooms
				</div>
				<div className="flex flex-row items-center gap-2 px-2 text-sm">
					<LuParkingSquare /> {parking} Parking spaces
				</div>
			</div>

			{/* Details */}
			<div className="flex-1 max-w-[500px] flex flex-col gap-3">
				<div className="text-xl">
					Price:{" "}
					<h6 className="inline font-semibold text-primary">
						#{price}
					</h6>
				</div>
				<div>{details}</div>
				<div>
					<Link to={'/real-estate/fdd'} className="flex items-center gap-2 p-2 px-4 text-white transition-all rounded-lg shadow-sm bg-primary hover:opacity-80 w-fit">
						View property
						<img src={Go} alt="" className="inline w-8 " />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RealEstate;
