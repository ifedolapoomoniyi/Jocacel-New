import { Logo, Go, Facebook, instagram, twitter, linkedin } from "../assets";

import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className="border-t flex flex-col border-gray-700 p-10 px-6 gap-5 justify-around text-base lg:text-xl lg:flex-row">
				<div className="max-w-[500px]">
					<img src={Logo} alt="" />
					<div>
						Every project starts with a chat. KADAF Properties
						Limited Liability Partnership will be happy to discuss
						your project.
						<br />A one-stop shop for real estate.
						<Link
							to="/contact"
							className="flex flex-row gap-2 items-center my-2 p-2 px-4 rounded-md bg-primary text-white hover:opacity-80 transition-all w-fit"
						>
							Contact Us{" "}
							<img src={Go} alt="" className="inline w-8" />
						</Link>
					</div>
				</div>

				{/* Menu */}
				<div className="flex flex-col gap-3 md:gap-5 my-4">
					<span className="font-bold">Menu</span>
					<Link to="/" className="hover:text-primary">
						Home
					</Link>
					<Link to="/team" className="hover:text-primary">
						About Us
					</Link>
					<Link to="/" className="hover:text-primary">
						Our Projects
					</Link>
					<Link to="/real-estate" className="hover:text-primary">
						Real Estate
					</Link>
					<Link className="hover:text-primary">Services</Link>
				</div>

				{/* Contacts */}
				<div className="max-w-[500px] flex flex-col gap-3 my-4">
					<div className="font-bold pb-2">Contact</div>
					<address>
						<span>Address: </span> 12, Shodamola Street, Ajoke Estate, Fagba, Agege, Lagos.
					</address>
					<div>
						<span>Phone: </span>{" "}
						<a href="tel:08064546214" className="underline">
							0806 454 6214
						</a>
						,{" "}
						<a href="tel:0705553211" className="underline">
							0705 553 2311
						</a>
					</div>
					<div>
						<span>Email: </span>{" "}
						<a href="mailto:kadafpropertiesllp@gmail.com" className="underline italic">
							kadafpropertiesllp@gmail.com
						</a>
						,{" "}
						<a href="mailto:info@kadafpropertiesllp.com" className="underline italic">
							info@kadafpropertiesllp.com
						</a>
					</div>
				</div>
			</div>

			<div className="mx-10 border-t-2 p-2 flex flex-row items-center justify-center gap-2">
				<a href="" className="hover:opacity-80">
					<img src={Facebook} alt="" />
				</a>
				<a href="" className="hover:opacity-80">
					<img src={twitter} alt="" />
				</a>
				<a href="" className="hover:opacity-80">
					{" "}
					<img src={instagram} alt="" />
				</a>
				<a
					href="https://x.com/michaeljamesLLP"
					className="hover:opacity-80"
				>
					<img src={linkedin} alt="" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
