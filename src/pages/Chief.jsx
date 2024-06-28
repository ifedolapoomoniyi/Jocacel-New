import { Navbar, Footer } from "../components";
import { buildings, ChiefImg } from "../assets";
import { motion } from "framer-motion";

const Chief = () => {
	return (
		<motion.div
			className="text-xl"
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
		>
			<Navbar />

			<div className="relative flex lg:flex-row flex-col gap-2 mx-4 lg:mx-10 mb-10">
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
						Dada Kayode Michael
						<span className="block font-semibold text-base text-primary ">
							CEO/Chairman
						</span>
					</div>
					<div>
						<img
							src={ChiefImg}
							alt=""
							className="z-10 rounded-xl shadow-lg md:h-[500px]"
						/>
					</div>
				</div>

				<div className="flex-1 pt-3">
					<div className="p-3 text-medium flex flex-col gap-4 text-[16px]">
						<p>
							<span className="font-bold text-lg">
								DADA, Kayode Michael
							</span>{" "}
							possesses three degrees across Nigeria and United
							Kingdom, all in the field of Psychology. He obtained
							his first degree at the then University of Ife (now
							Obafemi Awolowo University), Master’s Degree at
							University of Benin, and PhD at the University Essex
							in England.
						</p>
						<p>
							Dr. Dada is primarily a practicing Psychologist but
							his professional and business interest in the
							building industry spans four decades. He started his
							interest by leading in the construction of his
							family home in Lagos, right from purchase of the
							land, legal possession of the land, building
							approval process, and through to the full
							construction of the building. Kayode has since
							developed interest, skills and massive experience in
							the whole area of building industry and property
							management, under the aegis of DAKOO Properties. He
							has ventured into real estate both home and abroad
						</p>
						<p>
							He has operated through a carefully selected team of
							experts, who constitute the best and sought-after
							professionals and specialists in the estate business
							environment. He established a legal team of lawyers
							whose commitments are absolutely to protect DAKOO’s
							clients. The legal and marketing teams are well
							equipped to assist in sourcing for lands and
							buildings anywhere in Nigeria, and carry out a
							due-diligence process that ensures transactions are
							legal and legitimate. They take a leading role in
							the implementation and monitoring of contractual
							agreements.
						</p>
						<p>
							DAKOO, under his management, is composed of
							experienced and professionally credible Architects
							and Structural Engineers. Operating under his
							supervision, they have been very passionate in
							producing person-specific designs in their
							construction works across the country. His team of
							quantity surveyors have ensured efficient, reliable
							and valid cost estimates, thereby ensuring the need
							for avoidable cost variations. The builders work
							collaboratively with other team members, especially
							the Architects, Structural Engineer, and Quantity
							Surveyors to ensure physical and structural
							integrity of their constructions, in the most
							cost-effective manner.
						</p>
						<p>
							Dr Dada is pleased to bring to bear on the new
							partnership his vision and mission, creativity, and
							wealth of experience in construction and building
							industry.
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</motion.div>
	);
};

export default Chief;
