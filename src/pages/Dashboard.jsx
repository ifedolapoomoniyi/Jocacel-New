import { IoPeopleOutline } from "react-icons/io5";
import Sidebar from "../components/Sidebar";
import { MdHouse } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import AdminProject from "../components/AdminProject";
import RealEstate1 from "../assets/RealEstate1.png";
import AdminRealEstate from "../components/AdminRealEstate";
import RealEstateImg from "../assets/RealEstateImg.png";
import TopBar from "../components/TopBar";

const Dashboard = () => {
	return (
		<div className="text-xl flex w-full">
			<Sidebar />

			<div>
        <TopBar/>
				<div className="flex flex-row gap-4">
					<div>
						<IoPeopleOutline />
						<div>Team Members</div>
						<div>12</div>
					</div>
					<div>
						<MdHouse />
						<div>Real Estate Properties</div>
					</div>
					<div>
						<GoProjectRoadmap />
						<div>Projects</div>
						<div>8</div>
					</div>
				</div>

				{/* Cards */}
				<div className="flex gap-5 flex-wrap m-10">
					<AdminProject
						image={RealEstate1}
						text={
							"Construction of 5 Bedroom Duplex Private Development at Sango Ota, Ogun State"
						}
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
			</div>
		</div>
	);
};

export default Dashboard;
