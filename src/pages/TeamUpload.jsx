import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { BASE_URL } from "../utils/index";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { motion } from "framer-motion";

const TeamUpload = () => {
	const handleSubmit = async (values) => {
		try {
			const res = await fetch(`${BASE_URL}/team`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
			if (res.status === 200) {
				console.log("Upload succesfull");
				Fetch();
				toast.info("Upload Successful");
			}
		} catch (error) {
			console.error("error ooo", error.message);
		}
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			role: "",
			description: "",
			image: "",
		},
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});

	// Load Team members
	const [team, setTeam] = useState([]);

	const Fetch = async () => {
		const res = await fetch(`${BASE_URL}/team`);
		const data = await res.json();
		setTeam(data);
		console.log(data);
	};

	useEffect(() => {
		Fetch();
	}, []);

	// Handle Delete
	const deleteTeamMember = async (id) => {
		try {
			const res = await fetch(`${BASE_URL}/team/${id}`, {
				method: "DELETE",
			});
			const data = await res.json();
			console.log(data);
			if (data.msg == "Team member deleted successfully") {
				Fetch();
				toast.success("Team member deleted successfully");
			} else {
				console.log("That didn't work");
			}
		} catch (err) {
			toast.error("Something went wrong");
		}
	};

	// handle submit

	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
			className="flex flex-row w-full md:text-xl"
		>
			<Sidebar />

			<div className="w-full p-5">
				<Topbar />
				<ToastContainer />

				<div className="flex flex-wrap justify-center gap-10 py-5 md:justify-normal md:items-top">
					<div className=" w-[300px] md:w-[350px] rounded-lg shadow-xl">
						<h3 className="p-4 text-xl font-semibold bg-gray-300">
							Team Members
						</h3>
						{team.map((member) => (
							<div
								key={member._id}
								className="flex items-center justify-between gap-3 p-2 px-4 shadow-sm"
							>
								<h4>{member.name}</h4>
								<button
									onClick={() => {
										deleteTeamMember(member._id);
									}}
									className="p-2 transition duration-300 ease-in-out rounded-md hover:bg-red-600 hover:text-white"
								>
									<FaTrash />
								</button>
							</div>
						))}
					</div>

					<div>
						<div className=" w-[300px] md:w-[350px] rounded-lg shadow-xl">
							<h3 className="p-4 text-xl font-semibold bg-gray-300">
								Add Team Member
							</h3>
							<form
								className="p-4"
								onSubmit={formik.handleSubmit}
							>
								<div className="flex flex-col gap-4">
									<label htmlFor="name">Name</label>
									<input
										type="text"
										id="name"
										onChange={formik.handleChange}
										value={formik.values.name}
										className="p-2 border border-gray-300 rounded-md"
									/>
								</div>
								<div className="flex flex-col gap-4">
									<label htmlFor="role">Position</label>
									<input
										type="text"
										id="role"
										onChange={formik.handleChange}
										value={formik.values.role}
										className="p-2 border border-gray-300 rounded-md"
									/>
								</div>
								<div className="flex flex-col gap-4">
									<label htmlFor="description">
										Description
									</label>
									<textarea
										id="description"
										onChange={formik.handleChange}
										value={formik.values.description}
										className="p-2 border border-gray-300 rounded-md"
									></textarea>
								</div>
								<div className="flex flex-col gap-4">
									<label htmlFor="image">Image</label>
									<input
										type="file"
										id="image"
										className="p-2 border border-gray-300 rounded-md"
									/>
								</div>
								<div>
									<button
										type="submit"
										className="p-2 text-white rounded-md bg-primary"
									>
										Add Team Member
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default TeamUpload;
