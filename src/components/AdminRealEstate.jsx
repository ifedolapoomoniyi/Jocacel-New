import { useState } from "react";
import { FaArrowAltCircleRight, FaBath, FaTrash } from "react-icons/fa";
import { LuParkingSquare } from "react-icons/lu";
import { MdOutlineBed } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../utils";

const AdminRealEstate = ({
	image,
	text,
	location,
	price,
	parking,
	rooms,
	bathrooms,
	id
}) => {
	// handle toggle
	const [toggle, setToggle] = useState(false);
	const handleToggle = () => {
		setToggle(!toggle);
	};

	// Handle Delete
	const deleteProject = async (id) => {
		try {
			const res = await fetch(`${BASE_URL}/projects/${id}`, {
				method: "DELETE",
			});
			const data = await res.json();
			console.log(data);
			if (data.msg == "Project deleted successfully") {
				toast.success("Project deleted successfully");
				window.location.reload();
			} else {
				console.log("That didn't work");
				toast.error("Something went wrong");
			}
		} catch (err) {
			toast.error("Something went wrong");
		}
	};

	return (
		<div className="max-w-[600px]">
			{window.location.pathname !== "/dashboard/real-estate" ? (
				<div className="flex items-center justify-between p-3 md:p-5">
					<div className="text-xl font-bold md:text-2xl">
						Real Estate Properties
					</div>
					<button className="flex items-center gap-2 text-lg text-primary">
						View all <FaArrowAltCircleRight />
					</button>
				</div>
			) : (
				""
			)}

			<div className="flex flex-col items-center gap-4 p-4 border border-gray-400 rounded-lg shadow-xl md: md:flex-row md:items-stretch max-w-[400px] md:max-w-[1200px]">
				<div className="w-full md:w-fit">
					<div className="w-full">
						<img
							src={image}
							alt=""
							className=" w-full md:w-fit md:aspect-square md:h-[200px]"
						/>
					</div>
				</div>

				<div className="relative">
					<div>{text}</div>
					<div className="text-sm text-gray-700">{location}</div>
					<div>
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

					<button
						onClick={handleToggle}
						className="absolute right-0 p-2 rounded hover:bg-slate-200 top-3"
					>
						<TbDotsVertical />
					</button>

					{toggle ? (
						<div>
							<div
								onClick={() => {
									deleteProject(id);
								}}
								className="absolute top-0 right-0 flex flex-row items-center gap-2 p-2 text-red-500 bg-white rounded-lg shadow-md hover:bg-red-400 hover:text-white"
							>
								<FaTrash /> Delete project
							</div>
						</div>
					) : (
						""
					)}

					<h4 className="py-4 text-xl font-bold text-primary place-items-end">
						# {price}
					</h4>
				</div>
			</div>


			<ToastContainer/>
		</div>
	);
};

export default AdminRealEstate;
