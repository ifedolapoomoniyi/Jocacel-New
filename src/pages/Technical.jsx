import { Navbar, Footer } from "../components";
import { buildings, TechnicalImg } from "../assets";
import { motion } from "framer-motion";

const Technical = () => {
	return (
		<motion.div
			className="text-xl"
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
		>
			<Navbar />

			<div className="relative flex lg:flex-row flex-col gap-2 mx-4 lg:mx-10 mb-10 items-center">
				{/* Absolutely positioned styling */}
				<div className="flex flex-col">
					<img
						src={buildings}
						alt=""
						className="absolute left-3 top-4 -z-10 blur"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute blur right-2 top-2 -z-10"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute blur bottom-3 right-2/4 hidden lg:block"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute blur bottom-3 right-3 hidden lg:block"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute blur bottom-5 right-1/3"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute blur bottom-1/3 left-1/3"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute blur bottom-2 left-4"
					/>
					<img
						src={buildings}
						alt=""
						className="absolute blur top-5 left-[30%] -z-10 hidden lg:block"
					/>
				</div>

				<div className="lg:mr-14 flex flex-col m-auto lg:m-0">
					<div className="p-3 text-2xl font-bold mt-14 text-center">
						Odusina Adewale
						<span className="block font-semibold text-base text-primary ">
							Non-executive Technical Director
						</span>
					</div>
					<div>
						<img
							src={TechnicalImg}
							alt=""
							className="z-10 rounded-xl shadow-lg md:h-[500px]"
						/>
					</div>
				</div>

				<div className="flex-1 pt-3">
					<div className="p-3 text-medium flex flex-col gap-4 text-[16px]">
						<p>
							<span className="font-bold text-lg">
								ODUSINA, Adewale,
							</span>{" "}
							a Nigerian, is a Certified Electrical Engineer with
							24years in the Building Services Industry.
						</p>
						<p>
							He has worked at various Building services companies
							and participated in some of the most prestigious
							projects like Standard Chartered Bank Head Office,
							Gbagada Stadiums, Bank branches across the country,
							ExxonMobil House Remodeling, MTN Head Office and
							offices across the country, Hospital Developments,
							Lagos Waterfront Project, Many High Rise Buildings
							and many residential estates and private projects.
						</p>
						<p>
							Odusina is the MD/CEO of Hiworks Services Limited.
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</motion.div>
	);
};

export default Technical;
