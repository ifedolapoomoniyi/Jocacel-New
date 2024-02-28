import AdminRealEstate from "../components/AdminRealEstate";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import RealEstateImg from "../assets/RealEstateImg.png";

export const RealEstateDash = () => {
	return (
		<div className="flex text-xl">
			<Sidebar />

			{/* Manage realestate */}
			<div>
				<TopBar />

				<input type="file" name="" id="" />

				<div>
					<h2>Real Estate Properties</h2>
					<div className="flex flex-wrap gap-6">
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
