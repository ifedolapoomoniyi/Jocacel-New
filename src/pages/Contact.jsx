import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/ContactImg.png";
import Email from "../assets/icons/Email.svg";
import Call from "../assets/icons/Call.svg";

const Contact = () => {
	return (
		<div className="md:text-xl">
			<Navbar />

			<div className="flex items-center justify-center p-4">
				<img src={ContactImg} alt="" className="max-h-[60vh]" />
			</div>

			<div className="flex flex-col gap-3 m-5 md:gap-5 md:m-10 md:flex-row justify-center md:justify-evenly min-h-[70vh]">
				<div className="max-w-[600px]">
					<h2 className="my-2 text-2xl font-bold md:text-3xl">
						Have a Question? Get in touch with us now
					</h2>
					<div>
						Quality is never an accident, it is always the result of
						intelligent effort. Here are some of our recent building
						projects
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<a href="" className="flex flex-row items-center gap-2">
						<img
							src={Email}
							alt=""
							className="inline p-2 rounded-full bg-primary"
						/>
						<div className="underline">JamesOthniel@gmail.com</div>
					</a>
					<a href="" className="flex flex-row items-center gap-2">
						<img
							src={Call}
							alt=""
							className="inline-flex items-center justify-center p-2 rounded-full h-11 w-11 bg-primary"
						/>
						<div className="underline">+234 808 368 7240</div>
					</a>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Contact;
