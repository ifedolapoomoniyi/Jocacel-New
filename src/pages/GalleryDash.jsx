import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { useEffect } from "react";
import { BASE_URL } from "../utils";
import AdminProject from "../components/AdminProject";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const GalleryDash = () => {
	const [teamData, setTeamData] = useState([]);
	const Fetch = async () => {
		const res = await fetch(`${BASE_URL}/projects`);
		const data = await res.json();
		setTeamData(data);
	};
	useEffect(() => {
		Fetch();
	}, []);

	const handleSubmit = async (values) => {
		try {
			const res = await fetch(`${BASE_URL}/projects`, {
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

	// Formik
	const formik = useFormik({
		initialValues: {
			details: "",
			image: "",
		},
		onSubmit: (values) => {
			console.log(values);
			handleSubmit(values);
		},
	});
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
			className="flex flex-row md:text-xl"
		>
			<Sidebar />

			<div className="w-full p-5">
				<TopBar />

				<div className="md:border-none pb-5 border-b border-b-stone-600">
					<form onSubmit={formik.handleSubmit} action={(e=> {e.preventDefault()})} className="flex flex-col gap-3 w-[300px]">
            <h3 className="font-semibold p-2">Project Title</h3>
            <textarea name="details" id="details" value={formik.values.details} onChange={formik.handleChange} cols="30" rows="3" className="resize-none rounded-lg border-gray-200 border p-4"></textarea>
            <input type="file" name="image" id="image" value={formik.values.image} onChange={formik.handleChange}/>
            <button className="bg-primary p-2 rounded-lg text-white" type="submit">Upload Project</button>
          </form>
				</div>
				<div>
					<h2 className="font-semibold p-5">Past Projects</h2>

					<div className="flex flex-row gap-8 flex-wrap justify-center md:justify-normal">
						{teamData.map((item, index) => (
							<AdminProject
								key={index}
								text={item.details}
								image={item.image}
								id={item._id}
							/>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default GalleryDash;
