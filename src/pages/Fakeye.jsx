import { Navbar, Footer, BtnPrimary } from "../components";
import { buildings, TeamImg } from "../assets";

import { useState, useEffect } from "react";
import { BASE_URL } from "../utils";
import { useParams } from "react-router-dom";

const Fakeye = () => {
	const [teamData, setTeamData] = useState([]);
	const {id} = useParams()


	const Fetch = async () => {
		const res = await fetch(`${BASE_URL}/team/${id}`);
		const data = await res.json();
		setTeamData(data);
	};

	useEffect(() => {
		Fetch();
	}, []);

	return (
		<div className="text-xl">
			<Navbar />

			<div className="relative flex flex-row gap-2 m-10">
				{/* Absolutely positioned styling */}
				<div className="flex flex-col">
					<img
						src={buildings}
						alt=""
						className="absolute left-3 top-4 -z-10"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute right-2 top-2"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute bottom-3 right-2/4"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute bottom-3 right-3"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute bottom-5 right-1/3"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute bottom-1/3 left-1/3"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute bottom-2 left-4"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute top-5 left-[30%] -z-10"
					/>
				</div>

				<div className="flex-1">
					<div className="p-3 text-2xl font-semibold">
						{teamData.name}
					</div>
					<div>
						<img src={TeamImg} alt="" className="z-10 rounded-xl shadow-lg" />
					</div>
				</div>

				<div className="flex-1">
					<BtnPrimary text={teamData.role} white />
					<div className="flex flex-col gap-5 pt-5">
						<p>{teamData.description}</p>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Fakeye;
