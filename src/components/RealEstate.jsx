import { MdOutlineBed } from "react-icons/md";
import { LuParkingSquare } from "react-icons/lu";
import { FaBath } from "react-icons/fa";
import BtnPrimary from "./BtnPrimary";

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
		<div className="flex flex-row gap-3 lg:p-10 p-5 border-b-2 justify-between">
			<div className="max-w-[500px] flex flex-col gap-3">
				<div className="text-primary text-xl">{location}</div>
				<div className="text-2xl">{name}</div>
				<div>
					<div className="font-semibold text-xl">
						Property Features
					</div>
					<div className="text-base px-2 flex flex-row gap-2 items-center">
						<MdOutlineBed /> {rooms} Bedrooms
					</div>
					<div className="text-base px-2 flex flex-row gap-2 items-center">
						<FaBath /> {bathrooms} Bathrooms
					</div>
					<div className="text-base px-2 flex flex-row gap-2 items-center">
						<LuParkingSquare /> {parking} Parking spaces
					</div>
				</div>
			</div>

			{/* Image */}
			<div className="">
				<img src={image} alt=""  className="h-[300px]"/>
			</div>

			{/* Details */}
			<div className="flex-1 max-w-[500px] flex flex-col gap-3">
				<div>
					Price:{" "}
					<h6 className="text-primary inline font-semibold">
						#{price}
					</h6>
				</div>
				<div>{details}</div>
				<div>
					<BtnPrimary white text="View Property" />
				</div>
			</div>
		</div>
	);
};

export default RealEstate;
