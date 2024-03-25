import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleNavOpen = useCallback(() => {
		setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
	}, []);

	useEffect(() => {
		const hamburger = document.querySelector(".hamburger");

		hamburger.addEventListener("click", handleNavOpen);

		return () => {
			hamburger.removeEventListener("click", handleNavOpen);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isNavOpen]);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			// Check if the click target is outside the navbar
			if (
				isNavOpen &&
				event.target.closest(".navbar") === null &&
				event.target.closest(".hamburger") === null
			) {
				// Close the navbar
				handleNavOpen();
			}
		};

		// Add event listener to the document body
		document.body.addEventListener("click", handleOutsideClick);

		return () => {
			// Remove event listener when the component unmounts
			document.body.removeEventListener("click", handleOutsideClick);
		};
	}, [isNavOpen, handleNavOpen]);

	isNavOpen
		? (document.body.style.overflow = "hidden")
		: (document.body.style.overflow = "auto");

	return (
		<div
			className={
				isNavOpen
					? "bg-white flex flex-col md:flex-row md:justify-between md:items-center h-full md:h-auto z-10 fixed left-0 w-[315px] md:static md:w-auto transition-all duration-500"
					: "bg-white flex flex-col md:flex-row md:justify-between md:items-center h-full md:h-auto z-10 fixed left-[-100%] w-[315px] md:static md:w-auto transition-all duration-500"
			}
		>
			{/* Logo */}
			{/* <div>
				<div className="flex flex-row items-center absolute lg:hidden bg-white w-full">
					<Link to="/">
						<img src={Logo} alt="Logo" className="logo pt-3"/>
					</Link>
					<span className="logo-text py-[2px]">JOCACEL</span>
				</div>
			</div> */}

			<div className="flex gap-4 lg:gap-8 flex-col md:flex-row items-center justify-center p-2 w-full h-full">
				<NavLink
					to="/"
					className={({ isActive }) => {
						return isActive ? "text-primary" : "hover:text-primary";
					}}
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return isActive ? "text-primary" : "hover:text-primary";
					}}
					to="/team"
				>
					Team
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return isActive ? "text-primary" : "hover:text-primary";
					}}
					to="/services"
				>
					Services
				</NavLink>

				{/* Logo */}
				<div className="px-5 absolute top-2 md:static">
					<img src={Logo} alt="" className="h-12" />
				</div>

				<NavLink
					className={({ isActive }) => {
						return isActive ? "text-primary" : "hover:text-primary";
					}}
					to="/real-estate"
				>
					Real Estate
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return isActive ? "text-primary" : "hover:text-primary";
					}}
					to="/gallery"
				>
					Projects
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return isActive ? "text-primary" : "hover:text-primary";
					}}
					to="/contact"
				>
					Contact Us
				</NavLink>
			</div>

			{/* Hamburger */}
			<div className={isNavOpen ? "hamburger active" : "hamburger"}>
				<span className="bar side"></span>
				<span className="bar side"></span>
				<span className="bar side"></span>
			</div>
		</div>
	);
};

export default Navbar;
