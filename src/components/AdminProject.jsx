import { FaArrowAltCircleRight, FaTrash } from "react-icons/fa";
import { TbDotsVertical } from "react-icons/tb";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../utils";
import { useState } from "react";

const AdminProject = ({ image, text, id }) => {
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

		// handle toggle
		const [toggle, setToggle] = useState(false);
		const handleToggle = () => {
			setToggle(!toggle);
		};

	return (
		<div className="p-3 shadow-xl rounded-xl w-[300px]">
			{location.pathname !== "/dashboard/gallery" ? (
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-semibold">Recent Projects</h2>
					<Link
						to="/dashboard/gallery"
						className="text-primary text-base flex items-center gap-2"
					>
						View All <FaArrowAltCircleRight />
					</Link>
				</div>
			) : (
				""
			)}

			<div className="p-3 border border-black rounded-lg m-3">
				<div>
					<img
						className="flex m-auto rounded-lg aspect-square w-full"
						src={image}
						alt=""
					/>
				</div>
				<div className="pr-4 relative text-base leading-5 py-2">
					{text}
					<button onClick={handleToggle} className="p-2 hover:bg-slate-200 rounded absolute right-0 top-3"><TbDotsVertical/></button>

					{toggle ? (
					<div>
						<div onClick={()=> {deleteProject(id)}} className="flex flex-row items-center hover:bg-red-500 text-red-500 gap-2 p-2 hover:text-white rounded-lg shadow-md absolute right-0 top-0 bg-white cursor-pointer"><FaTrash/> Delete project</div>
					</div>
					) : (
						""
					)}
				</div>
			</div>
			<ToastContainer/>
		</div>
	);
};

export default AdminProject;
