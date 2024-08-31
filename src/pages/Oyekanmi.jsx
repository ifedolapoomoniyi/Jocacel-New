import { Navbar, Footer } from "../components";
import { buildings, OyekanmiImg } from "../assets";
import { motion } from "framer-motion";

const Oyekanmi = () => {
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
						BLDR. Oyekanmi O. Olugbenga
						<span className="block font-semibold text-base text-primary ">
							Department Head, Quantity Survey
						</span>
					</div>
					<div>
						<img
							src={OyekanmiImg}
							alt=""
							className="z-10 rounded-xl shadow-lg md:h-[500px]"
						/>
					</div>
				</div>

				<div className="flex-1 pt-3">
					<div className="p-3 text-medium flex flex-col gap-4 text-[16px]">
						<p>
							<span className="font-bold text-lg">
								Bldr. Oyekanmi O. O,
							</span>{" "}
							a graduate of Building from Yaba College of
							Technology (1982) holds a Master Degree in Project
							Management (Building) from the University of Lagos
							(2007).
						</p>
						<p>
							He has been in the construction industry, both in
							practice and in teaching, for a cumulative period of
							up to 42 years.
						</p>
						<p>
							He has practiced in various capacities as a Project
							Engineer, Project Quantity Surveyor and Project
							Manager, in both indigenous and multinational
							companies such as H.F.P Engineering Nigeria Ltd,
							Butter Nigeria Ltd. and Olivegold Technologies Ltd.
							Some of the projects in which he actively
							participated are:
						</p>
						<p>
							<ul className="list-disc pl-8">
								<li>
									A modern supermarket and block of 58 Nos.
									closed-up shops complete with
									infrastructures in Ikeja, Lagos.
								</li>
								<li>
									2 Nos. five storey block of 10 Nos. flats
									each in high brow area of Victoria Island,
									Lagos on piled foundation and approximately
									5,000 sq. metres area.
								</li>
								<li>
									Renovation of existing office and
									residential blocks for use as UNICEF Country
									Office at Oyinkan Abayomi Drive, Ikoyi,
									Lagos.
								</li>
								<li>
									A modern church complex with stepped and
									raised podium, a baptistery and a gallery,
									located in Festac Town, Lagos.
								</li>
								<li>
									Conversion of residential quarters at
									Independence Layout, Enugu and construction
									of a warehouse for Unicef office.
								</li>
								<li>
									Development of market and infrastructures at
									Ikeja Cantonment, Oshodi, Lagos.
								</li>

								<li>
									Students hostel development at University of
									Ibadan.
								</li>
							</ul>
						</p>
						<p>
							In teaching, Bldr Oyekanmi O. O. headed at various
							times, the Building Technology Department of the
							Lagos State Polytechnic which transmuted into Lagos
							State University of Science and Technology.
						</p>
						<p>
							Professionally, Bldr. O. O. Oyekanmi is a graduate
							of the Chartered Institute of Building, London; he
							is a fully registered Builder and Quantity Surveyor
							in Nigeria.
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</motion.div>
	);
};

export default Oyekanmi;
