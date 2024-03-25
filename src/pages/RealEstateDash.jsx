import AdminRealEstate from "../components/AdminRealEstate";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import RealEstateImg from "../assets/RealEstateImg.png";
import { Link } from "react-router-dom";

export const RealEstateDash = () => {
	return (
		<div className="flex text-xl">
			<Sidebar />

			{/* Manage realestate */}
			<div className="p-5">
				<TopBar />

				<Link to="/dashboard/add-real-estate" className="p-5 m-5 mx-10 text-xs scale-150 bg-green-200 border border-dashed rounded-lg border-primary w-fit">
					+ Add New Project
				</Link>

				<div className="py-5">
					<h2 className="relative py-3 text-xl font-semibold w-fit">Real Estate Properties
					{/* underline */}
					<span className="block bg-primary absolute left-3 right-3 h-0.5"></span>
					</h2>
					<div className="flex flex-wrap justify-center gap-6 pt-3 md:justify-normal">
						<AdminRealEstate
							text={
								"Exquisitely Finished & Spacious 5 Bedroom Semidetached Duplex"
							}
							location={
								"12 Shodamola Street, Ajoke Estate, Fagba, Lagos"
							}
							rooms={"4"}
							bathrooms={"4"}
							parking={"6"}
							image={RealEstateImg}
							price={"95,000,000"}
						/>
						<AdminRealEstate
							text={
								"Exquisitely Finished & Spacious 5 Bedroom Semidetached Duplex"
							}
							location={
								"12 Shodamola Street, Ajoke Estate, Fagba, Lagos"
							}
							rooms={"4"}
							bathrooms={"4"}
							parking={"6"}
							image={RealEstateImg}
							price={"95,000,000"}
						/>
						<AdminRealEstate
							text={
								"Exquisitely Finished & Spacious 5 Bedroom Semidetached Duplex"
							}
							location={
								"12 Shodamola Street, Ajoke Estate, Fagba, Lagos"
							}
							rooms={"4"}
							bathrooms={"4"}
							parking={"6"}
							image={RealEstateImg}
							price={"95,000,000"}
						/>
						<AdminRealEstate
							text={
								"Exquisitely Finished & Spacious 5 Bedroom Semidetached Duplex"
							}
							location={
								"12 Shodamola Street, Ajoke Estate, Fagba, Lagos"
							}
							rooms={"4"}
							bathrooms={"4"}
							parking={"6"}
							image={RealEstateImg}
							price={"95,000,000"}
						/>
					</div>

					<div></div>
				</div>
			</div>
		</div>
	);
};
