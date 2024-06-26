import { Sidebar, TopBar } from "../components";
import { convertToBase64 } from "../utils";
import { useState } from "react";
import { useFormik } from "formik";

const AddRealEstate = () => {
	// Track image upload state
	const [file, setFile] = useState(null);

	const handleSubmit = async (values) => {
		try {
			// const res = await fetch(`${BASE_URL}/real-estate`, {
			// 	method: "POST",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 	},
			// 	body: JSON.stringify(values),
			// });
			// if (res.status === 200) {
			// 	console.log("Upload Succesful");
			// 	Fetch();
			// 	toast.info("Upload Successful");
			// }
			console.log("values", values);
		} catch (error) {
			console.error("Error: ", error.message);
		}
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			location: "",
			rooms: "",
			bathrooms: "",
			parking: "",
			price: "",
		},

		onSubmit: async (values) => {
			try {
				values = Object.assign(values, { image: file || "" });
				handleSubmit(values);
				console.log("values", values);
			} catch (error) {
				console.error("Error: ", error.message);
			}
		},
	});

	// File upload handler
	const onUpload = async (e) => {
		const base64 = await convertToBase64(e.target.files[0]);
		setFile(base64);
		console.log("base64", base64);
	};

	return (
		<div className="flex text-base md:text-xl">
			<Sidebar />

			<div className="w-full p-5">
				<TopBar />

				<div className="flex flex-col items-center md:items-baseline md:flex-row ">
					<div className="min-w-[300px] mb-10">
						<h2 className="relative py-3 text-xl font-semibold w-fit">
							Add Property Images
							<span className="block bg-primary absolute left-3 right-3 h-0.5"></span>
						</h2>
						<div className="flex flex-wrap gap-6">
							<div className="p-5 m-5 mx-10 text-xs scale-150 bg-green-200 border border-dashed rounded-lg border-primary w-fit">
								<label htmlFor="image"> + Add Image</label>
							</div>
							<input
								type="file"
								id="image"
								name="image"
								accept="image/*"
								onChange={onUpload}
							/>
						</div>
					</div>

					<div className="flex-1">
						<h2 className="relative font-semibold w-fit">
							Property Details
							<span className="block bg-primary absolute left-3 right-3 h-0.5"></span>
						</h2>

						<form onSubmit={formik.handleSubmit}>
							<div className="flex flex-col gap-4 py-4 w-[350px]">
								<div className="flex flex-col">
									<label htmlFor="name">Property Name</label>
									<input
										type="text"
										id="name"
										className="p-2 border border-gray-300 rounded-lg"
										value={formik.values.name}
										onChange={formik.handleChange}
									/>
								</div>
								<div className="flex flex-col">
									<label htmlFor="location">
										Property Location
									</label>
									<input
										type="text"
										id="location"
										className="p-2 border border-gray-300 rounded-lg"
										value={formik.values.location}
										onChange={formik.handleChange}
									/>
								</div>
								<div className="flex flex-col">
									<label htmlFor="rooms">
										Number of Rooms
									</label>
									<input
										type="number"
										id="rooms"
										className="p-2 border border-gray-300 rounded-lg"
										value={formik.values.rooms}
										onChange={formik.handleChange}
									/>
								</div>
								<div className="flex flex-col">
									<label htmlFor="bathrooms">
										Number of Bathrooms
									</label>
									<input
										type="number"
										id="bathrooms"
										className="p-2 border border-gray-300 rounded-lg"
										value={formik.values.bathrooms}
										onChange={formik.handleChange}
									/>
								</div>
								<div className="flex flex-col">
									<label htmlFor="parking">
										Number of Parking Spaces
									</label>
									<input
										type="number"
										id="parking"
										className="p-2 border border-gray-300 rounded-lg"
										value={formik.values.parking}
										onChange={formik.handleChange}
									/>
								</div>
								<div className="flex flex-col">
									<label htmlFor="price">
										Property Price
									</label>
									<input
										type="text"
										id="price"
										className="p-2 border border-gray-300 rounded-lg"
										value={formik.values.price}
										onChange={formik.handleChange}
									/>
								</div>
								<div className="flex justify-end">
									<button
										className="p-3 mt-5 text-white rounded-lg bg-primary"
										type="submit"
									>
										Upload Property
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddRealEstate;
