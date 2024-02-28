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
		<div>
			{window.location.pathname !== "/dashboard/real-estate" ? (
				<div className="flex justify-between items-center p-5">
					<div className="text-2xl font-bold">
						Real Estate Properties
					</div>
					<button className="text-primary flex items-center gap-2 text-lg">
						View all <FaArrowAltCircleRight />
					</button>
				</div>
			) : (
				""
			)}

			<div className="flex gap-4 shadow-xl border border-gray-400 rounded-lg p-4">
				<div>
					<div>
						<img
							src={image}
							alt=""
							className="aspect-square h-[200px]"
						/>
					</div>
				</div>

				<div className="relative">
					<div>{text}</div>
					<div className="text-gray-700 text-sm">{location}</div>
					<div>
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

					<button
						onClick={handleToggle}
						className="p-2 hover:bg-slate-200 rounded absolute right-0 top-3"
					>
						<TbDotsVertical />
					</button>

					{toggle ? (
						<div>
							<div
								onClick={() => {
									deleteProject(id);
								}}
								className="flex flex-row items-center hover:bg-red-400 text-red-500 gap-2 p-2 hover:text-white rounded-lg shadow-md absolute right-0 top-0 bg-white"
							>
								<FaTrash /> Delete project
							</div>
						</div>
					) : (
						""
					)}

					<h4 className="text-primary font-bold text-xl place-items-end py-4">
						# {price}
					</h4>
				</div>
			</div>


			<ToastContainer/>
		</div>
	);
};

export default AdminRealEstate;
