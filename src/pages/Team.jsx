import { Navbar, Footer, TeamCard, BtnPrimary } from "../components";
import { ChiefImgAlt, FakeyeImg, LawyerImg, OyekanmiImgAlt, TeamImg, TechnicalImg } from "../assets";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { BASE_URL } from "../utils";

const Team = () => {
	const [teamData, setTeamData] = useState([]);

	const Fetch = async () => {
		const res = await fetch(`${BASE_URL}/team`);
		const data = await res.json();
		setTeamData(data);
		console.log(data);
	};

	useEffect(() => {
		Fetch();
	}, []);
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
			className="text-xl"
		>
			<Navbar />

			<div className="team-hero text-white flex flex-col items-center justify-center h-screen">
				<h1 className="text-4xl font-bold px-10">About Us</h1>
				<div className="p-4">
					A very high value is attached to reliable and competent
					personnel. They are the greatest assets that we require
				</div>
				<BtnPrimary text={"Contact Us"} arrow />
			</div>

			{/* Meet the team */}
			<div className="p-5 md:p-10 flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-center pb-4">
					Meet The Team
				</h1>
				<p>
					Training of all categories of our personnel is with high
					premium to keep all members well informed in their
					corresponding sections.
				</p>
				<p>
					KADAF Board of Directors currently comprises of a Chief
					Executive Officer, one Managing Director, company
					secretary/lawyer and Partners.
				</p>

				<p>
					We acquire more staffs in the firm as the number of our
					projects increases. We also partner with other construction
					firms, engineering firms and some architectural firms on
					various types of projects to ensure our quality and valuable
					delivery.
				</p>
			</div>

			{/* Hardcoded teams members */}
			<div className="flex flex-row flex-wrap gap-5 items-center justify-center p-10">
				<TeamCard
					name="Dada Kayode"
					title="CEO"
					route="/team/chief"
					text="Dada, Kayode Micheal possesses three degrees across Nigeria and United Kingdom, all in the field of Pyschology"
					image={ChiefImgAlt}
				/>
				<TeamCard
					name="Abolarin Fakeye"
					title="Managing Director"
					route="/team/director"
					text="FAKEYE, Abolarin is a professional builder, proficient construction project manager with wealth of cost-effective construction engineering skills at both design and construction stages.."
					image={FakeyeImg}
				/>
				<TeamCard
					name="Akinwale Omolara"
					title="Company Secretary/Lawyer"
					route="/team/lawyer"
					text="Akinwale, Omolara is a professional Legal Practitioner, Corporate Secretary, Administrator and Certified Mediator. With utmost efficiency"
					image={LawyerImg}
				/>
				<TeamCard
					name="Odusina Adewale"
					title="CTO"
					route="/team/technical"
					text="Odusina, Adewale, a Nigerian, is a Certified Electrical Engineer with 24 years in the Building Services Industry. He has worked at various Building services companies"
					image={TechnicalImg}
				/>	
				<TeamCard
					name="Oyekanmi O Olugbenga"
					title="Head, Quantity Survey"
					route="/team/oyekanmi"
					text="Bldr. Oyekanmi O. O, a graduate of Building from Yaba College of Technology (1982) holds a Master Degree in Project Management (Building) from the University of Lagos (2007)."
					image={OyekanmiImgAlt}
				/>	
			</div>

			{/* Team cards */}
			<div className="flex flex-row flex-wrap gap-5 items-center justify-center p-10">
				{teamData.map((team) => (
					<TeamCard
						key={team._id}
						name={team.name}
						title={team.role}
						route={`/team/${team._id}`}
						text={team.description}
						image={team.image ? team.image : TeamImg}
					/>
				))}
			</div>

			<Footer />
		</motion.div>
	);
};

export default Team;
