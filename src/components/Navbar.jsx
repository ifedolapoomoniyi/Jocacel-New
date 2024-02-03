import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
	return (
		<div className="flex gap-2 items-center justify-center p-2">
			<div className="flex gap-8">
				<Link className="hover:text-primary" to="/home">Home</Link>
				<Link className="hover:text-primary" to="/team">Team</Link>
				<Link className="hover:text-primary" to="/services">Services</Link>
			</div>

			{/* Logo */}
			<div className="px-5">
				<img src={Logo} alt="" className="h-12"/>
			</div>

			<div className="flex gap-8">
				<Link className="hover:text-primary" to="/real-estate" >Real Estate</Link>
				<Link className="hover:text-primary" to="/projects">Projects</Link>
				<Link className="hover:text-primary" to="/contact-us">Contact Us</Link>
			</div>
		</div>
	);
};

export default Navbar;
