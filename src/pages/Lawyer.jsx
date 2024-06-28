import { Navbar, Footer } from "../components";
import { buildings, LawyerImg } from "../assets";
import { motion } from "framer-motion";

const Lawyer = () => {
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
						Akinwale Omolara
						<span className="block font-semibold text-base text-primary ">
							Company Secretary/Lawyer
						</span>
					</div>
					<div>
						<img
							src={LawyerImg}
							alt=""
							className="z-10 rounded-xl shadow-lg md:h-[500px]"
						/>
					</div>
				</div>

				<div className="flex-1 pt-3">
					<div className="p-3 text-medium flex flex-col gap-4 text-[16px]">
						<p>
							<span className="font-bold text-lg">
								AKINWALE, Omolara
							</span>{" "}
							is a professional Legal Practitioner, Corporate
							Secretary, Administrator and Certified Mediator.
							With utmost efficiency, she leads a firm of Lawyers
							and Corporate Secretaries and Mediators named
							Omolara Akinwale & Co.
						</p>
						<p>
							Omolara became a Certified Mediator, Conflict
							Resolution (Lagos Multidoor Court House) in 2019,
							and also a Member, Chartered Institute of
							Arbitrators, Arbitration since 2015 after obtaining
							her membership as a chartered company secretary with
							the Institute of Chartered Secretaries and
							Administrators of Nigeria in 2013. She attended
							University of Ibadan and graduated in 2002 to obtain
							her LL.B and Barrister at Law in 2004.
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</motion.div>
	);
};

export default Lawyer;
