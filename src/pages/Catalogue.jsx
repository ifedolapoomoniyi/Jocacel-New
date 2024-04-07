import { BtnPrimary, Footer, Navbar, RealEstate } from "../components";
import { House1 } from "../assets";

const Catalogue = () => {
	return (
		<div className="md:text-xl">
			<Navbar />

			{/* Hero */}
			<div className="estate-hero text-white h-screen flex flex-col items-center justify-center p-4">
				<h1 className="p-4 text-3xl font-bold text-center">
					Find your new property
				</h1>
				<div className="max-w-[700px] p-3">
					Welcome to Kadaf, your ultimate destination for finding your
					dream property. Whether you&apos;re looking or a cozy home
					or a stylish apartment, we have the perfect options waiting
					for you
				</div>
				<BtnPrimary text={"Contact Us"} arrow white />
			</div>

			{/* Browse our Catalogue */}
			<div className="flex flex-col items-center justify-center">
				<h2 className="font-bold text-2xl text-center p-3 py-5 pt-10">
					Browse Our Catalogue
				</h2>
				<div className="text-center w-full p-3 py-3 max-w-[700px]">
					Check out some of the properties currently on sale in our
					catalogue. Your family home might just be here.
				</div>
			</div>

			{/* Catalogue section*/}
			<div>
				<RealEstate
					location="12 Shodamola, stree, Ajoke Estate, Fagba, Lagos"
					name="Exquisitely Finished and Spacious 5 Bedrrom Semidetatched Duplex.."
					price="95,000,000"
					rooms="4"
					bathrooms="4"
					parking="6"
					details="The project comprises of two duplexes, each duplex comprising of 5 en-suite bedrooms and 1 study. Ground floor comprises of a big kitchen & store, sitting room, dining, 1 bedroom and a big study. Upper floor has 4 bedrooms, a moderate family sitting room, a lobby each in the front and ba....."
					image={House1}
				/>
				<RealEstate
					location="12 Shodamola, stree, Ajoke Estate, Fagba, Lagos"
					name="Exquisitely Finished and Spacious 5 Bedrrom Semidetafched Duplex.."
					price="95,000,000"
					rooms="4"
					bathrooms="4"
					parking="6"
					details="The project comprises of two duplexes, each duplex comprising of 5 en-suite bedrooms and 1 study. Ground floor comprises of a big kitchen & store, sitting room, dining, 1 bedroom and a big study. Upper floor has 4 bedrooms, a moderate family sitting room, a lobby each in the front and ba....."
				/>
			</div>

			<Footer />
		</div>
	);
};

export default Catalogue;
