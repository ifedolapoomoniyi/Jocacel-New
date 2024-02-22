import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { BASE_URL } from "../utils/index";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";

const TeamUpload = () => {
  const handleSubmit = async (values) => {
		try {
			const res = await fetch(`${BASE_URL}/team`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),});
			if (res.status === 200) {
        console.log("Upload succesfull")
        Fetch();
        toast.info("Upload Successful")
      }
		} catch (error) {
			console.error("error ooo",error.message);
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
	};

	// handle submit

	return (
		<div className="flex flex-row text-xl">
			<Sidebar />

			<div>
				<Topbar />
				<ToastContainer />

				<div className="flex gap-10 items-top justify-around flex-wrap">
					<div className=" w-[350px] rounded-lg shadow-xl">
						<h3 className="text-xl font-semibold p-4 bg-gray-300">
							Team Members
						</h3>
						{team.map((member) => (
							<div
								key={member._id}
								className="p-2 shadow-sm px-4 flex items-center gap-3 justify-between"
							>
								<h4>{member.name}</h4>
								<button
									onClick={() => {
										deleteTeamMember(member._id);
									}}
									className="p-2 rounded-md hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
								>
									<FaTrash />
								</button>
							</div>
						))}
					</div>

					<div>
						<div className=" w-[350px] rounded-lg shadow-xl">
							<h3 className="text-xl font-semibold p-4 bg-gray-300">
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
										className="p-2 rounded-md border border-gray-300"
									/>
								</div>
								<div className="flex flex-col gap-4">
									<label htmlFor="role">Position</label>
									<input
										type="text"
										id="role"
										onChange={formik.handleChange}
										value={formik.values.role}
										className="p-2 rounded-md border border-gray-300"
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
										className="p-2 rounded-md border border-gray-300"
									></textarea>
								</div>
								<div className="flex flex-col gap-4">
									<label htmlFor="image">Image</label>
									<input
										type="file"
										id="image"
										className="p-2 rounded-md border border-gray-300"
									/>
								</div>
								<div>
									<button
										type="submit"
										className="bg-primary text-white p-2 rounded-md"
									>
										Add Team Member
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamUpload;
