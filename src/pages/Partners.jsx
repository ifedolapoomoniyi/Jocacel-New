import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { motion } from "framer-motion";
import {
	BuildersImg,
	DakooImg,
	Go,
	JocacelImg,
	HarbleyzImg,
	StarkwoodImg,
	HiworksImg,
	ArchitectsImg,
} from "../assets";
import PartnerCard from "../components/PartnerCard";

const Partners = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
			className="overflow-x-hidden text-base lg:text-xl"
		>
			<Navbar />

			{/* Hero Section */}
			<div className="flex flex-col items-center justify-center w-full h-screen p-4 text-white partners-hero">
				<h1 className="text-3xl text-center">Our Partners</h1>
				<p className="text-center">
					Whether you&apos;re looking to build a new home, remodel
					your existing space, or simply buy a new home, we have the
					expertise to bring your vision to life
				</p>
				<Link
					to="/contact"
					className="flex flex-row items-center gap-2 p-2 px-4 my-2 text-white transition-all rounded-md bg-primary hover:opacity-80"
				>
					Contact Us <img src={Go} alt="" className="inline w-8" />
				</Link>
			</div>

			{/* Builders section */}

			<div className="m-5">
				<h2 className="font-bold text-3xl py-5 p-5">Our Builders</h2>
				<div className="flex gap-10 items-center flex-wrap justify-start p-5">
					<PartnerCard
						image={JocacelImg}
						title="James Othniel Construction & Civil Engineering Limited."
						address="Starkwood Office, Suite 8, Oadis Plaza, 4 CMD Road, Magodo, Lagos"
					/>

					<PartnerCard
						image={DakooImg}
						title="DAKOO properties"
						address="15/17, Lanre Mohammed Street, Obawole, Agege, Lagos"
					/>

					<PartnerCard
						image={BuildersImg}
						title="4Ti5D Builders Limited"
						address="House 19, Road 4, Oladejo Estate Magboro, Ogun State"
					/>
				</div>

				{/* Structural Engineers */}
				<div className="m-5 mt-10">
					<h2 className="font-bold text-3xl py-5">
						Structural Engineers
					</h2>

					<div className="flex flex-wrap gap-10 items-center justify-start">
						<PartnerCard
							image={StarkwoodImg}
							title="Starkwood Associates Limited"
							address="Suite 8, Oadis Plaza, 4 CMD Road, Magodo, Lagos."
						/>

						<PartnerCard
							image={HarbleyzImg}
							title="Harbleyz's Consulting Engineers Limited"
							address="6, Fakoya Street, Ikosi Ketu, Lagos"
						/>
					</div>
				</div>

				{/* Mechanical and Electrical Engineers */}
				<div className="m-5 mt-10">
					<h2 className="font-bold text-3xl py-5">
						Mechanical and Electrical Engineers
					</h2>

					<div>
						<PartnerCard
							image={HiworksImg}
							title="Hiworks Services Limited"
							address="OPL Office, 4, Eunuce Tutorial Close, Gbagada Phase 2, Shomulu, Lagos."
						/>
					</div>
				</div>

				{/* Architects */}
				<div className="m-5 mt-10 mb-10">
					<h2 className="font-bold text-3xl py-5">
						Architects
					</h2>

					<div>
						<PartnerCard
							image={ArchitectsImg}
							title="ATS Design MB & Associates"
							address="Road 1, Blk. 8, SOAS Estate, Adigbe, Abeokuta, Ogunn State."
						/>
					</div>
				</div>
			</div>

			<Footer/>
		</motion.div>
	);
};

export default Partners;
