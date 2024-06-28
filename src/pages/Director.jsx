import { Navbar, Footer } from "../components";
import { buildings, FakeyeImg } from "../assets";
import { motion } from "framer-motion";

const Director = () => {
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
						Abolarin Fakeye
						<span className="block font-semibold text-base text-primary ">
							Executive Director
						</span>
					</div>
					<div>
						<img
							src={FakeyeImg}
							alt=""
							className="z-10 rounded-xl shadow-lg md:h-[500px]"
						/>
					</div>
				</div>

				<div className="flex-1 pt-3">
					<div className="p-3 text-medium flex flex-col gap-4 text-[16px]">
						<p>
							<span className="font-bold text-lg">
								FAKEYE, Abolarin
							</span>{" "}
							is a professional builder, proficient construction
							project manager with wealth of cost-effective
							construction engineering skills at both design and
							construction stages. Abolarin is the Managing
							Director and the Chief Executive Director of JAMES
							OTHNIEL Construction and Civil Engineering Ltd.
						</p>
						<p>
							He obtained both his ND and HND certificates in
							Building Technology from the Federal Polytechnics,
							Ilaro 2006 and 2009, respectively. In 2019 he
							obtained his B.Tech from Bells University, Ota, also
							in Building Technology. He is a professional member
							of NIOB and a registered Builder with CORBON.
						</p>
						<p>
							Abolarin is a diligent building construction
							technologist with good Civil and Structural
							Engineering technical knowledge demonstrated by 7
							years of profound consultancy and supervisory
							experience. Desirous of good engineering techniques
							at both design and construction stages to enhance
							economical and timely delivery of buildings and
							infrastructures. He is a construction project
							manager with wealth of technical management skills;
							monitors site engineers&apos; implementation and
							offers complementary roles to the site manager.
							While he was with MO&A he did structural Design &
							Coordination with active technical supervision of
							all classes of buildings which include the famous
							Greystone Tower, at 12 Idowu Taylor, V/I, Lagos; GT
							Bank Training School, Abeokuta; BUA H/O, Churchgate;
							Lagos, Evercare Hospital, Admiralty Way (which was
							made out of existing four suspended floor building),
							Lekki, Lagos; C-Ceramica Showroom, Lagos, etc. He
							also served with Business Contracting Limited (BCL),
							a Construction and Civil Engineering firm as
							Technical Assistant to the Construction GM and
							double up as Project Manager on Iconic-Towers’
							project at Sinari Daranijo in Victoria, Lagos.
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</motion.div>
	);
};

export default Director;
