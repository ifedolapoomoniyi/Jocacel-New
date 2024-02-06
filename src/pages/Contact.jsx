import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/ContactImg.png";
import Email from "../assets/icons/Email.svg";
import Call from "../assets/icons/Call.svg";

const Contact = () => {
	return (
		<div className="text-xl">
			<Navbar />

			<div className="flex items-center justify-center">
				<img src={ContactImg} alt="" className="max-h-[60vh]"/>
			</div>

			<div className="flex flex-row gap-2 justify-evenly m-10">
				<div className="max-w-[600px]">
					<h2 className="text-3xl font-bold">
						Have a Question? Get in touch with us now
					</h2>
					<div>
						Quality is never an accident, it is always the result of
						intelligent effort. Here are some of our recent building
						projects
					</div>
				</div>
				<div>
					<a href="" className="flex flex-row gap-2">
						<img
							src={Email}
							alt=""
							className="p-2 bg-primary rounded-full inline"
						/>
            <div className="underline">JamesOthniel@gmail.com</div>
					</a>
					<a href="" className="flex flex-row gap-2">
						<img
							src={Call}
							alt=""
							className="p-2 bg-primary rounded-full items-center justify-center inline-flex"
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
