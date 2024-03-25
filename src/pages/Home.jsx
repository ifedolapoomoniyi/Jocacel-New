import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import Img4 from "../assets/Img4.png";
import Img5 from "../assets/Img5.png";
import Mission from "../assets/Mission.png";
import Go from "../assets/icons/Go.svg";
import About1 from "../assets/About1.png";
import About2 from "../assets/About2.png";
import About3 from "../assets/About3.png";
import About4 from "../assets/About4.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
			className=" text-base lg:text-xl overflow-x-hidden"
		>
			<Navbar />

			{/* Hero Section */}
			<div className="landing-hero  h-screen w-full text-white flex flex-col items-center justify-center p-4">
				<h1 className="text-3xl">
					Top Designers and Developers of Buildings in Nigeria
				</h1>
				<p>Get your dream house built by the best in the industry</p>
				<button className="flex flex-row gap-2 items-center my-2 p-2 px-4 rounded-md bg-primary text-white hover:opacity-80 transition-all">
					Contact Us <img src={Go} alt="" className="inline w-8" />
				</button>
			</div>

			{/* About Section */}
			<div className="">
				<h1 className="text-4xl font-bold text-center p-4 pt-6">
					What We Do
				</h1>
				<div className="flex flex-col md:flex-row gap-20 p-5 pb-20 items-center max-w-[1200px] md:p-10">
					<div className="flex-1 relative mr-5 md:mr-0">
						<img src={Img1} alt="" />
						<img
							src={Img2}
							alt=""
							className="absolute top-8 left-8 md:top-14 md:left-14"
						/>
					</div>
					<div className="flex-1 flex justify-center items-center">
						We render comprehensive services in the spectrum of
						construction and civil engineering, real estate and
						facility management. With our prized human resources
						comprised of experienced personnel, adept at deploying
						latest technologies to serve better our stream of
						clients, timely and accurate project goal achievement is
						guaranteed.
						<br />
						We render advisory and design services as parts of our
						consultancy in civil and engineering services to our
						sub-contractors and clients.
					</div>
				</div>

				<div className="flex flex-col md:flex-row gap-5 py-10 justify-between p-5 md:p-10">
					{/* styling div */}
					<div className="md:w-1 h-1 w-6/12 md:h-auto bg-primary self-end md:self-auto"></div>

					<div className="flex-1 max-w-[700px] flex flex-col items-center justify-center">
						<h2 className="font-bold text-3xl">
							General Construction Services, Water and Wastewater
							Systems, and General Electrical Installations
						</h2>
						<div>
							Construction, maintenance and upgrade of
							infrastructures: buildings remodeling and building
							services, structural signboards, telecoms and
							petroleum facilities. Building Integrity Surveys
							(Level 1, 2 & 3). We offer services which include
							preliminary studies, planning, design, construction,
							supervision and managerial works.
						</div>
					</div>
					<div className="flex-1">
						<img src={Img3} alt="" />
					</div>
				</div>

				<div className="flex flex-col-reverse md:flex-row gap-4 justify-between p-8 relative">
					<div>
						<img src={Img4} alt="" />
					</div>
					<div className="flex flex-col justify-center">
						<h2 className="font-bold text-3xl">
							Roads, Hardstands and Allied Facilities
						</h2>
						<ul className="max-w-[700px]">
							We do preliminary studies and design, final designs
							to supervision of construction works on:
							<li>Primary;</li>
							<li>Trunk;</li>
							<li>Feeder;</li>
							<li>Estate and Road systems; and</li>
							<li>Drainage systems.</li>
						</ul>
					</div>
					{/* styling divs */}
					<div className="w-24 h-1 bg-primary"></div>
					<div className="h-32 w-32 -z-10 rounded-full bg-bluish absolute md:-left-28 md:-bottom-20 -right-24 top-24"></div>
				</div>

				{/* Other special services */}
				<div className="flex flex-col md:flex-row gap-2 justify-between p-5 pt-10 md:p-10">
					{/* styling div */}
					<div className="w-1 h-auto bg-primary hidden md:block"></div>
					<div className="flex flex-col items-center justify-center">
						<ul className="flex flex-col gap-2">
							<h2 className="py-4 text-2xl font-bold">
								Other Special Services
							</h2>
							<li>
								<span className="h-4 w-4 bg-primary rounded-full inline-block mx-1"></span>{" "}
								Real Estate
							</li>
							<li>
								<span className="h-4 w-4 bg-primary rounded-full inline-block mx-1"></span>
								Construction Management for both Green and Brown
								Fields (factories, laboratories, etc.)
							</li>
							<li>
								<span className="h-4 w-4 bg-primary rounded-full inline-block mx-1"></span>
								Structural Integrity Survey of Existing
								Structures & Structural Retrofitting Report.
							</li>
							<li>
								<span className="h-4 w-4 bg-primary rounded-full inline-block mx-1"></span>{" "}
								Concrete Repairs and Demolitons;
							</li>
							<li>
								<span className="h-4 w-4 bg-primary rounded-full inline-block mx-1"></span>{" "}
								Underpinning of Foundation.
							</li>
							<li>
								<span className="h-4 w-4 bg-primary rounded-full inline-block mx-1"></span>
								Mechanical, Electrical & Plumbing Installations
							</li>
						</ul>
					</div>

					<div className="py-3">
						<img src={Img5} alt="" />
					</div>
				</div>
			</div>

			{/* About us */}
			<h2 className="p-4 text-3xl font-bold text-center">
				Why You Should Trust Us
			</h2>
			<div className="pt-5 p-5 md:p-10 flex flex-col md:flex-row gap-2 items-center md:items-start">
				<div className="pr-5 flex flex-col gap-4 max-w-[900px]">
					<h2 className="text-2xl font-semibold">About us</h2>
					<p>
						KADAF Properties Limited Liability Partnership is an
						organization with a complete team of built-environment
						professionals, Construction Project Managers, and legal
						practitioners who are well versed in the real estate
						matters.
					</p>
					<p>
						KADAF Properties LLP specializes in turnkey projects
						from the purchase of land to the development of any
						kinds of landed properties (and facility management).
						KADAF does structural design (in concrete, steel and
						wooden structures) of buildings and civil
						infrastructures to various final finishes, installations
						of household appliances and furniture. Our mechanical
						and electrical designs and installation services are
						handled by well-seasoned engineers.{" "}
					</p>
					<p>
						KADAF established a technical working relationship with
						reputable local and international organizations,
						manufacturers, and relevant agencies to ensure
						satisfactory delivery of projects and achievement of its
						business objectives. We also value ingenious approach to
						building challenges at both local and international
						levels.
					</p>
					<p>
						KADAF is set up to create a new perspective in the
						construction industry through a better managerial
						innovative technologies and collaborative approach to
						establish for itself enviable position for Reliability
						and Dynamic Infrastructure Development and Management
						capability. KADAF is opting for the Real Estate Empire
						in Nigeria!
					</p>
				</div>

				<div className="flex flex-row gap-2 smd:pl-4 md:min-w-[300px] lg:min-w-[400px] mt-8 w-full md:w-auto">
					<div className="flex flex-col gap-2">
						<span>
							<img src={About1} alt="" />
						</span>
						<span>
							<img src={About3} alt="" />
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<span>
							<img src={About2} alt="" />
						</span>

						<span>
							<img src={About4} alt="" />
						</span>
					</div>
				</div>
			</div>

			{/* Mission and vision section */}
			<div className="p-4 md:p-10 flex flex-col md:flex-row gap-3 md:gap-7">
				<div>
					<h2 className="text-2xl font-bold py-5">Our Mission</h2>
					<div className="max-w-[600px]">
						To meet all customers’ standards of qualities and values
						with good economic advantages to all stakeholders whilst
						we commit ourselves to innovative techniques without any
						violation of health, safety and industrial harmony.
						First consideration of indigenous skills, knowledge and
						creativity for redevelopment and integration into world
						standard templates in the industry.
						<br />A one-stop shop for real estate.
					</div>
				</div>
				<div className="w-full md:w-auto">
					<img src={Mission} alt="" className="w-full max-h-[500px] h-full object-cover"/>
				</div>
				<div className="flex flex-col justify-end max-w-[500px]">
					<h2 className="text-2xl font-bold py-5">Our Vision</h2>
					<div>
						To establish an indigenous turnkey construction company
						with world class values and reputation.
					</div>
				</div>
			</div>

			{/* Projects and real estate */}
			<div className="text-white text-xl md:text-2xl font-light flex flex-col md:flex-row justify-center items-center md:items-stretch m-8 my-16 gap-1 md:gap-0">
				<div className="bg-primary rounded-2xl shadow-lg p-6 flex flex-col gap-2 max-w-[500px]">
					<div>Projects</div>
					<h2 className="text-bold text-3xl font-semibold py-2">
						Our Work
					</h2>
					<div>
						Quality is never an accident, it is always the result of
						intelligent effort. Here are some of our recent building
						projects
					</div>
					<Link to="/gallery" className="text-2xl flex items-center gap-2 justify-end pt-4 animate-pulse">
						View Our Work{" "}
						<span className="border-white border p-2 inline-flex items-center justify-center rounded-full hover:animate-ping cursor-pointer">
							<img src={Go} alt="" className="inline" />
						</span>
					</Link>
				</div>

				<div className="bg-secondary rounded-2xl shadow-lg p-4 flex flex-col gap-2 max-w-[500px]">
					<div>Real Estate</div>
					<h2 className="font-semibold text-3xl py-2">
						Our Properties
					</h2>
					<div>
						Quality is never an accident, it is always the result of
						intelligent effort. Here are some of our recent building
						projects
					</div>
					<Link to="/real-estate" className="hover:animate-none cursor-pointer animate-pulse flex items-center justify-end gap-2 pt-4">
						View Our Properties{" "}
						<span className="border-white border p-2 inline-flex items-center justify-center rounded-full hover:animate-ping ">
							<img src={Go} alt="" className="inline" />
						</span>
					</Link>
				</div>
			</div>

			{/* Footer */}
			<Footer />
		</motion.div>
	);
};

export default Home;
